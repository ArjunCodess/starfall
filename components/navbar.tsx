"use client"

import * as React from "react"
import Link from "next/link"
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { DATA } from "@/app/data"
import { Button } from "./ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "./mode-toggle"

const navbarData = DATA.navbarData;
const general = DATA.general;

export default function Navbar() {
    const { isSignedIn, user } = useUser();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header>
            <nav className="sticky top-0 z-50 bg-background backdrop-blur-lg border-b h-[8vh] flex items-center justify-between px-4 md:px-6">
                <Link href="/">
                    <h1 className="font-bold text-xl md:text-2xl">{general.productName}</h1>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <Icons.logo className="h-6 w-6" />
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        shadcn/ui
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Beautifully designed components that you can copy and
                                                        paste into your apps. Accessible. Customizable. Open
                                                        Source.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/docs" title="Introduction">
                                            Re-usable components built using Radix UI and Tailwind CSS.
                                        </ListItem>
                                        <ListItem href="/docs/installation" title="Installation">
                                            How to install dependencies and structure your app.
                                        </ListItem>
                                        <ListItem href="/docs/primitives/typography" title="Typography">
                                            Styles for headings, paragraphs, lists...etc
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {navbarData.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/dashboard" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Dashboard
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            {user?.username == general.adminUsername &&
                                <NavigationMenuItem>
                                    <Link href="/admin" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Admin
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            }
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex items-center gap-x-2 md:gap-x-5">
                    {isSignedIn ? <UserButton /> : (
                        <div className="flex items-center gap-x-2 md:gap-x-5">
                            <Link href="/sign-in">
                                <Button>
                                    Log In
                                </Button>
                            </Link>
                        </div>
                    )}
                    <div className="hidden md:inline-block"><ModeToggle /></div>

                    {/* Mobile Navigation */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col gap-4">
                                <Link href="/" onClick={() => setIsOpen(false)}>
                                    Home
                                </Link>
                                <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                                    Dashboard
                                </Link>
                                {user?.username == general.adminUsername &&
                                    <Link href="/admin" onClick={() => setIsOpen(false)}>
                                        Admin
                                    </Link>
                                }
                                <ModeToggle />
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})

ListItem.displayName = "ListItem"