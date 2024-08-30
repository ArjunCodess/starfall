import Link from 'next/link';

export default function Credit() {
    return (
        <div className="fixed bottom-5 right-5 z-50 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors duration-200 bg-white/80  dark:bg-white/10 backdrop-blur-md p-2 rounded-lg border border-neutral-200 dark:border-white/[0.2]">
            Made with ❤️ by{" "}
            <Link
                href="https://arjuncodess.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-neutral-800 dark:text-neutral-200"
            >
                @ArjunCodess
            </Link>
        </div>
    );
}