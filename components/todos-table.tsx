'use client'

import React, { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import PaginationControls from './pagination-controls'
import { Todo } from '@/types'

interface TodoTableProps {
    todos: Todo[];
}

const ITEMS_PER_PAGE = 5;

export default function TodoTable({ todos }: TodoTableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const totalPages = Math.ceil(todos.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentTodos = todos.slice(startIndex, endIndex);

    if (!isClient) return null;

    return (
        <div className="w-full bg-white dark:bg-neutral-800 rounded-md overflow-hidden shadow-md">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">User</th>
                            <th className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">User Id</th>
                            <th className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Text</th>
                            <th className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTodos.map((todo) => {
                            const baseUrl = "https://avatar.vercel.sh/";
                            const randomChar = todo.userId ? String.fromCharCode(65 + (todo.userId.charCodeAt(0) % 26)) : 'A';
                            const finalUrl = baseUrl + randomChar;

                            const firstName = todo.firstName || "N/A";
                            const lastName = todo.lastName || "User";
                            const photo = todo.photo || finalUrl;
                            const avatarFallback = `${firstName[0]}${lastName[0]}`;

                            return (
                                <tr key={todo.todoId} className='border-b dark:border-neutral-600 border-neutral-200'>
                                    <td className="px-4 py-2 font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                                        <Avatar>
                                            <AvatarImage src={photo} alt={`${firstName} ${lastName}`} />
                                            <AvatarFallback>{avatarFallback}</AvatarFallback>
                                        </Avatar>
                                        <span>{firstName} {lastName}</span>
                                    </td>
                                    <td className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{todo.userId}</td>
                                    <td className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{todo.text}</td>
                                    <td className="px-4 py-2 text-neutral-700 dark:text-neutral-300">
                                        {todo.done ? '✅' : '❌'}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <PaginationControls 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    )
}