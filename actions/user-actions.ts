"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { User } from "@/types";
import { eq } from "drizzle-orm";

export const getAllUsers = async () => {
    const data = await db.select().from(users);
    return data;
};

export const getUser = async (userId: any) => {
    const user = await db.query.users.findMany({
        where: (users, { eq }) => eq(users.clerkId, userId),
        with: {
            todos: true,
        },
    });

    return user;
};

export const addUser = async (user: User) => {
    await db
        .insert(users)
        .values({
            // @ts-ignore
            clerkId: user?.clerkId,
            email: user?.email,
            name: user?.name!,
            firstName: user?.firstName,
            lastName: user?.lastName,
            username: user?.username,
            photo: user?.photo,
        })
        .returning({ clerkClientId: users?.clerkId });

    revalidatePath("/");
};

export const updateUser = async (user: Partial<User>) => {
    if (!user.clerkId) throw new Error("ClerkId is required for updating a user");

    await db
        .update(users)
        .set({
            email: user.email,
            name: user.name,
            firstName: user.firstName!,
            lastName: user.lastName!,
            username: user.username!,
            photo: user.photo,
            updatedAt: new Date(),
        })
        .where(eq(users.clerkId, user.clerkId));

    revalidatePath("/");
}