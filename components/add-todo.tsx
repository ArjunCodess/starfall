import { FC, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface Props {
    createTodo: (text: string) => void;
}

const AddTodo: FC<Props> = ({ createTodo }) => {
    const [text, setText] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim()) {
            createTodo(text)
            setText("")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-grow"
            />
            <Button type="submit">
                <Plus className="h-4 w-4 mr-2" />
                Add
            </Button>
        </form>
    )
}

export default AddTodo;