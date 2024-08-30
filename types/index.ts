export type todoType = {
    id: string;
    text: string;
    done: boolean;
};

export type User = {
    id: string;
    name: string;
    email: string;
    clerkId: string;
    firstName: string | null;
    lastName: string | null;
    username: string | null;
    photo: string;
    createdAt: Date | number | null;
    updatedAt: Date | number | null;
};

export type Todo = {
    todoId: string;
    text: string;
    done: boolean;
    userId: string;
    firstName: string | null;
    lastName: string | null;
    photo: string | null;
}