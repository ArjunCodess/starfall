import { db } from '@/db/drizzle';
import { users, todos } from '@/db/schema';
import { eq } from 'drizzle-orm';
import UserTable from '@/components/users-table';
import TodoTable from '@/components/todos-table';
import ComponentList from '@/components/component-list';
import { User } from '@/types';

export default async function Page() {
    const usersData = await db.select().from(users);

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
        <section>
            <div className="md:mt-10 p-5">
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                        Users
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">This is the table of Users in your application.</p>
                </div>
                <UserTable users={usersData as User[]} />
            </div>
            <div className="md:mt-10 p-5">
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                        Todos
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">This is the table of Todos in your application, along with user information.</p>
                </div>
                <TodoTable todos={todosData} />
            </div>
            <div className='md:mt-10 p-5 disabled'>
                <ComponentList />
            </div>
        </section>
    )
}