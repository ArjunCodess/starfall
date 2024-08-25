export type todoType = {
    id: number;
    text: string;
    done: boolean;
};

export type User = {
    id: string;
    name: string;
    email: string;
    clerkId: string;
    firstName: string;
    lastName: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;
} | null;