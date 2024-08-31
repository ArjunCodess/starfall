import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[90vh] px-4 mx-auto max-w-screen-xl lg:px-6 flex items-center justify-center">
            <div className="mx-auto text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-neutral-900 md:text-4xl dark:text-white">Something&apos;s missing.</p>
                <p className="mb-4 text-lg font-medium text-neutral-500 dark:text-neutral-400">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.</p>
                <Button>
                    <Link href="#" className="inline-flex  bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
                </Button>
            </div>
        </div>
    )
}