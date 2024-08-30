'use client'

import React from 'react'
import { Button } from "@/components/ui/button"

interface PaginationControlsProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function PaginationControls({ currentPage, totalPages, onPageChange }: PaginationControlsProps) {
    return (
        <div className="flex justify-between items-center px-4 py-2 bg-neutral-100 dark:bg-neutral-700">
            <Button 
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage === 1}
                variant="outline"
            >
                Previous
            </Button>
            <span className="text-neutral-700 dark:text-neutral-300">
                Page {currentPage} of {totalPages}
            </span>
            <Button 
                onClick={() => onPageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
                variant="outline"
            >
                Next
            </Button>
        </div>
    )
}