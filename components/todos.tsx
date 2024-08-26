"use client"

import { FC, useState } from "react"
import { todoType, User } from "@/types"
import { addTodo, deleteTodo, editTodo, toggleTodo } from "@/actions/todoActions"
import AddTodo from "./add-todo"
import Todo from "./todo"
import { v4 as uuid } from "uuid"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatePresence, motion } from "framer-motion"

interface Props {
    todos: todoType[]
    user: User
}

const Todos: FC<Props> = ({ todos = [], user }) => {
    const [todoItems, setTodoItems] = useState<todoType[]>(todos)

    const createTodo = (text: string) => {
        const id = uuid()
        addTodo(id, text, user.id)
        setTodoItems((prev) => [
            { id, text, done: false, userId: user.id },
            ...prev,
        ])
    }

    const changeTodoText = (id: string, text: string) => {
        setTodoItems((prev) =>
            prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
        )
        editTodo(id, text)
    }

    const toggleIsTodoDone = (id: string, done: boolean) => {
        setTodoItems((prev) =>
            prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
        )
        toggleTodo(id, done)
    }

    const deleteTodoItem = (id: string) => {
        setTodoItems((prev) => prev.filter((todo) => todo.id !== id))
        deleteTodo(id)
    }

    return (
        <Card className="w-full max-w-2xl mx-auto border-0">
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