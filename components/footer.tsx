import { Button } from "@/components/ui/button"
import { DATA } from "@/app/data"
import { clsx } from "clsx"
import Link from "next/link"

const footerLinks = DATA.footerLinks;
const productName = DATA.general.productName;

export default function Footer() {
    return (
        <footer className="bg-transparent text-black dark:text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div className="col-span-3 sm:col-span-4 lg:col-span-2">
                        <Button variant="ghost" className="p-0 h-auto">
                            <span className="text-base sm:text-lg font-semibold">{productName}</span>
                        </Button>
                        <p className="mt-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                            © copyright {productName} 2024. All rights reserved.
                        </p>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title} className={clsx(
                            section.title === "Register" && "col-span-2 sm:col-span-1"
                        )}>
                            <h3 className="text-sm font-semibold mb-2 sm:mb-4">{section.title}</h3>
                            <ul className="space-y-1 sm:space-y-2">
                                {section.items.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-12 sm:mt-20 relative">
                <p className="text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none">
                    <span className="bg-gradient-to-t from-neutral-200 to-neutral-400 dark:from-neutral-900 dark:to-transparent bg-clip-text text-transparent">
                        {productName}
                    </span>
                </p>
            </div>
        </footer>
    )
}