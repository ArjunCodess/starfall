"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db } from "@/db/drizzle";
import { todos } from "@/db/schema";

export const getData = async (userId: any) => {
    const data = await db.select().from(todos).where(eq(todos.userId, userId));
    return data;
};

export const addTodo = async (id: any, text: string, userId: any) => {
    await db.insert(todos).values({
        id,
        text,
        userId,
    });
    revalidatePath("/");
};

export const deleteTodo = async (id: any) => {
    await db.delete(todos).where(eq(todos.id, `${id}`));
    revalidatePath("/");
};

export const toggleTodo = async (id: any, done: boolean) => {
    await db
        .update(todos)
        .set({
            done: done,
        })
        .where(eq(todos.id, `${id}`));
    revalidatePath("/");
};

export const editTodo = async (id: any, text: string) => {
    await db
        .update(todos)
        .set({
            text: text,
        })
        .where(eq(todos.id, `${id}`));
    revalidatePath("/");
};