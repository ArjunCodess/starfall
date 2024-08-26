"use client"

import { FC, useState } from "react"
import { todoType } from "@/types"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2, MoreVertical, Check } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface Props {
    todo: todoType
    changeTodoText: (id: string, text: string) => void
    toggleIsTodoDone: (id: string, done: boolean) => void
    deleteTodoItem: (id: string) => void
}

const Todo: FC<Props> = ({ todo, changeTodoText, toggleIsTodoDone, deleteTodoItem }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const handleEdit = () => {
        if (isEditing) changeTodoText(todo.id, editedText);
        setIsEditing(!isEditing);
    }

    const handleDelete = () => {
        deleteTodoItem(todo.id);
        setIsDeleteDialogOpen(false);
    }

    return (
        <div className="flex items-center space-x-2 p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors my-4">
            <Checkbox
                checked={todo.done}
                onCheckedChange={() => toggleIsTodoDone(todo.id, todo.done)}
                className="data-[state=checked]:bg-primary"
            />
            {isEditing ? (
                <Input
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="flex-grow"
                />
            ) : (
                <span
                    className={`flex-grow ${todo.done ? "line-through text-muted-foreground" : ""
                        }`}
                >
                    {todo.text}
                </span>
            )}
            {isEditing ? (
                <Button variant="ghost" size="icon" onClick={handleEdit}>
                    <Check className="h-4 w-4" />
                </Button>
            ) : (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={handleEdit}>
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit
                        </DropdownMenuItem>
                        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                            <DialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader className="mt-1">
                                    <DialogTitle>Are you sure you want to delete this todo?</DialogTitle>
                                    <DialogDescription>
                                        This action cannot be undone. This will permanently delete your todo.
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button variant="destructive" onClick={handleDelete}>
                                        Delete
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </div>
    )
}

export default Todo;