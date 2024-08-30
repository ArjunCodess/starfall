'use client'

import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import PaginationControls from './pagination-controls'
import { User } from '@/types'

interface UserTableProps {
    users: User[];
}

const ITEMS_PER_PAGE = 5;

export default function UserTable({ users }: UserTableProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentUsers = users.slice(startIndex, endIndex);

    return (
        <div className="w-full bg-white dark:bg-neutral-800 rounded-md overflow-hidden shadow-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">User</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">User Id</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Name</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Username</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Email</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Created</TableHead>
                        <TableHead className="px-4 py-2 text-left text-neutral-700 dark:text-neutral-300">Updated</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentUsers.map((user) => (
                        <TableRow key={user.id} className='border-b dark:border-neutral-600 border-neutral-200'>
                            <TableCell className="px-4 py-2">
                                <Avatar>
                                    <AvatarImage src={user.photo} alt={user.firstName + ' ' + user.lastName} />
                                    <AvatarFallback>{user.firstName ? user.firstName[0] : ''} {user.lastName ? user.lastName[0] : ''}</AvatarFallback>
                                </Avatar>
                            </TableCell>
                            <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{user.id}</TableCell>
                            <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{user.firstName} {user.lastName}</TableCell>
                            <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{user.username}</TableCell>
                            <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{user.email}</TableCell>
                            <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{new Date(user.createdAt!).toLocaleDateString()}</TableCell>
                            <TableCell className="px-4 py-2 text-neutral-700 dark:text-neutral-300">{new Date(user.updatedAt!).toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    )
}