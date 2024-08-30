import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { addUser, updateUser } from "@/actions/user-actions";
import { NextResponse } from "next/server";
import { User } from "@/types";

export async function POST(req: Request) {
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local");

    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature)
        return new Response("Error occured -- no svix headers", { status: 400 });

    const payload = await req.json();
    const body = JSON.stringify(payload);

    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent;

    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent;
    }

    catch (err) {
        console.error("Error verifying webhook:", err);
        return new Response("Error occured", { status: 400 });
    }

    const { id } = evt.data;
    const eventType = evt.type;

    if (eventType === "user.created") {
        const { id, email_addresses, image_url, first_name, last_name, username, created_at, updated_at } = evt.data;

        const user = {
            clerkId: id,
            email: email_addresses[0].email_address,
            name: username!,
            firstName: first_name,
            lastName: last_name,
            username: username,
            photo: image_url,
            created_at: created_at,
            updated_at: updated_at,
        };

        await addUser(user as unknown as User);
        return NextResponse.json({ message: "New user created", user });
    }

    else if (eventType === "user.updated") {
        const { id, email_addresses, image_url, first_name, last_name, username, updated_at } = evt.data;

        const updatedUser = {
            clerkId: id,
            email: email_addresses[0].email_address,
            name: username,
            firstName: first_name,
            lastName: last_name,
            username: username,
            photo: image_url,
            updated_at: updated_at,
        };

        await updateUser(updatedUser as unknown as User);
        return NextResponse.json({ message: "User updated", user: updatedUser });
    }

    console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
    console.log("Webhook body: ", body);

    return NextResponse.json({ message: "Webhook received" }, { status: 200 });
}