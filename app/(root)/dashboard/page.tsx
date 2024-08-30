import { getUser } from "@/actions/user-actions";
import Todos from "@/components/todos";
import { currentUser } from "@clerk/nextjs/server";

export default async function UserDashboard() {
    const user = await currentUser();

    const fetchedData = await getUser(user?.id);

    return (
        fetchedData && (
            <main className="flex items-center justify-between mt-5 md:mt-10">
                <Todos
                    todos={fetchedData[0]?.todos.map(todo => ({
                        ...todo,
                        id: todo.id,
                    }))}
                    // @ts-ignore
                    user={fetchedData[0]}
                />
            </main>
        )
    );
}