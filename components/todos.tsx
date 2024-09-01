"use client"

import { FC, useState } from "react"
import { todoType, User } from "@/types"
import { addTodo, deleteTodo, editTodo, toggleTodo } from "@/actions/todo-actions"
import AddTodo from "./add-todo"
import Todo from "./todo"
import { v4 as uuid } from "uuid"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatePresence, motion } from "framer-motion"
import { toast } from "sonner"

interface Props {
    todos: todoType[]
    user: User
}

const Todos: FC<Props> = ({ todos = [], user }) => {
    const [todoItems, setTodoItems] = useState<todoType[]>(todos)

    const createTodo = (text: string) => {
        const id = uuid()
        const promise = addTodo(id, text, user.id)
        toast.promise(promise, {
            loading: 'Creating todo...',
            success: 'Todo created!',
            error: 'Error creating todo',
        })
        setTodoItems((prev) => [
            { id, text, done: false, userId: user.id },
            ...prev,
        ])
    }

    const changeTodoText = (id: string, text: string) => {
        setTodoItems((prev) =>
            prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
        )
        const promise = editTodo(id, text)
        toast.promise(promise, {
            loading: 'Updating todo...',
            success: 'Todo updated!',
            error: 'Error updating todo',
        })
    }

    const toggleIsTodoDone = (id: string, done: boolean) => {
        setTodoItems((prev) =>
            prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
        )
        const promise = toggleTodo(id, done)
        toast.promise(promise, {
            loading: 'Updating todo status...',
            success: 'Todo status updated!',
            error: 'Error updating todo status',
        })
    }

    const deleteTodoItem = (id: string) => {
        setTodoItems((prev) => prev.filter((todo) => todo.id !== id))
        const promise = deleteTodo(id)
        toast.promise(promise, {
            loading: 'Deleting todo...',
            success: 'Todo deleted!',
            error: 'Error deleting todo',
        })
    }

    return (
        <Card className="w-full max-w-2xl mx-auto border-0 min-h-[90vh]">
            <CardHeader>
                <CardTitle className="text-3xl md:text-5xl font-bold text-center">Todo App</CardTitle>
            </CardHeader>
            <CardContent>
                <AddTodo createTodo={createTodo} />
                <div className="mt-4">
                    <AnimatePresence initial={false}>
                        {todoItems.map((todo) => (
                            <motion.div
                                key={todo.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Todo
                                    todo={todo}
                                    changeTodoText={changeTodoText}
                                    toggleIsTodoDone={toggleIsTodoDone}
                                    deleteTodoItem={deleteTodoItem}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </CardContent>
        </Card>
    )
}

export default Todos