import { relations } from "drizzle-orm";
import { text, boolean, pgTable, uuid, timestamp } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
    id: uuid('id').primaryKey().defaultRandom(),
    text: text("text").notNull(),
    done: boolean("done").default(false).notNull(),
    userId: uuid("user_id").notNull().references(() => users.id),
});

export const users = pgTable("users", {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    clerkId: text("clerkId").notNull(),
    firstName: text("firstName").notNull(),
    lastName: text("lastName").notNull(),
    username: text("username").notNull(),
    photo: text("photo").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const todosRelations = relations(todos, ({ one }) => ({
    user: one(users, { fields: [todos.userId], references: [users.id] }),
}));

export const usersRelations = relations(users, ({ many }) => ({
    todos: many(todos),
}));