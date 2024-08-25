import { getUser } from "@/actions/userActions";
import Todos from "@/components/todos";
import { User } from "@/types";
import { currentUser } from "@clerk/nextjs/server";

export default async function UserDashboard() {
    const user: User = await currentUser();
    if (!user) return;

    const fetchedData = await getUser(user?.id);

    return (
        fetchedData && (
            <main className="flex  items-center justify-between ">
                <Todos todos={fetchedData[0]?.todos} user={fetchedData[0]} />
            </main>
        )
    );
}