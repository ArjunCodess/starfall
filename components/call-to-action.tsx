import React from 'react'
import { Button } from "@/components/ui/button"

export default function CallToAction() {
    return (
        <div className="relative w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <div className="relative z-20 max-w-5xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                    Good Hero Equals Trust.
                </h1>

                <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-5">
                    Trusted by Trusted Companies and Trusted People
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-md">
                        Our Work
                    </Button>
                    <Button variant="secondary" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>
    )
}