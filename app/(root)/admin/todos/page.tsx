import { db } from '@/db/drizzle';
import { todos, users } from '@/db/schema';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { eq } from 'drizzle-orm';

export default async function page() {
    const todosData = await db
        .select({
            todoId: todos.id,
            text: todos.text,
            done: todos.done,
            userId: todos.userId,
            firstName: users.firstName,
            lastName: users.lastName,
            photo: users.photo,
        })
        .from(todos)
        .leftJoin(users, eq(users.id, todos.userId));

    return (
        <section className="min-h-screen md:min-h-[60vh] md:mt-20 p-8 rounded-lg">
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                    Todos
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">This is the table of Todos in your application, along with user information.</p>
            </div>

            <Table className="w-full bg-white dark:bg-neutral-800 rounded-md overflow-hidden shadow-md">
                <TableHeader className="bg-neutral-200 dark:bg-neutral-700">
                    <TableRow>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">User</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">User Id</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Text</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Done</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {todosData.map((todo) => {
                        const baseUrl = "https://avatar.vercel.sh/";
                        const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                        const finalUrl = baseUrl + randomChar;

                        const firstName = todo.firstName || "N/A";
                        const lastName = todo.lastName || "User";
                        const photo = todo.photo || finalUrl;
                        const avatarFallback = `${firstName[0]} ${lastName[0]}`;

                        return (
                            <TableRow key={todo.todoId} className='border-b border-neutral-600'>
                                <TableCell className="px-4 py-2 font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src={photo} alt={`${firstName} ${lastName}`} />
                                        <AvatarFallback>{avatarFallback}</AvatarFallback>
                                    </Avatar>
                                    <span>{firstName} {lastName}</span>
                                </TableCell>
                                <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{todo.userId}</TableCell>
                                <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{todo.text}</TableCell>
                                <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">
                                    {todo.done ? '✅' : '❌'}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </section>
    );
}