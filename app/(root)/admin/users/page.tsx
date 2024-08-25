import { db } from '@/db/drizzle';
import { users } from '@/db/schema';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function page() {
    const usersData = await db.select().from(users);

    return (
        <section className="min-h-screen md:min-h-[60vh] md:mt-20 p-8 rounded-lg">
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                    Users
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">This is the table of Users in your application.</p>
            </div>
            <Table className="w-full bg-white dark:bg-neutral-800 rounded-md overflow-hidden shadow-md">
                <TableHeader className="bg-neutral-200 dark:bg-neutral-700">
                    <TableRow>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">User</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">User Id</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Name</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Email</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Username</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Created</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Updated</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {usersData.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell className="px-4 py-2">
                                <Avatar>
                                    <AvatarImage src={user.photo} alt={user.name} />
                                    <AvatarFallback>{user.firstName[0]}{user.lastName[0]}</AvatarFallback>
                                </Avatar>
                            </TableCell>
                            <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{user.id}</TableCell>
                            <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{user.firstName} {user.lastName}</TableCell>
                            <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{user.email}</TableCell>
                            <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{user.username}</TableCell>
                            <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                            <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{new Date(user.updatedAt).toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    )
}