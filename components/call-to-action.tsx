import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CallToAction() {
    return (
        <div className="relative w-full flex flex-col items-center justify-center text-center px-4 py-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <Sparkles className="w-full h-full text-blue-500" />
            </div>
            <div className="relative z-20 max-w-5xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                    Innovate. Create. <span className="text-blue-600 dark:text-blue-400">Trust.</span>
                </h1>

                <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
                    Join the ranks of industry leaders who trust our solutions
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="default" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                        Explore Our Work
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="secondary" className="w-full sm:w-auto text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white px-8 py-3 rounded-full border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 ease-in-out">
                        Get in Touch
                    </Button>
                </div>
            </div>
        </div>
    )
}