'use client'

import React, { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">User</TableHead>
                            <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">User Id</TableHead>
                            <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Text</TableHead>
                            <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Done</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentTodos.map((todo) => {
                            const baseUrl = "https://avatar.vercel.sh/";
                            const randomChar = todo.userId ? String.fromCharCode(65 + (todo.userId.charCodeAt(0) % 26)) : 'A';
                            const finalUrl = baseUrl + randomChar;

                            const firstName = todo.firstName || "N/A";
                            const lastName = todo.lastName || "User";
                            const photo = todo.photo || finalUrl;
                            const avatarFallback = `${firstName[0]}${lastName[0]}`;

                            return (
                                <TableRow key={todo.todoId} className='border-b dark:border-neutral-600 border-neutral-200'>
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
            </div>
            <PaginationControls 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    )
}