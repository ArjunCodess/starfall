"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGridComponent, BentoGridItem } from "./ui/bento-grid";
import {
    IconLock,
    IconDatabase,
    IconLayoutDashboard,
    IconChecklist,
    IconUserCircle,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BentoGrid() {
    return (
        <BentoGridComponent className="w-full mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={cn("[&>p:text-lg]", item.className)}
                    icon={item.icon}
                />
            ))}
        </BentoGridComponent>
    );
}

const AuthSetup = () => {
    const variants = {
        initial: { x: 0 },
        animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
    };
    const variantsSecond = {
        initial: { x: 0 },
        animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-neutral-950/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-neutral-950"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex-shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-neutral-950"
            >
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                <IconLock className="h-6 w-6 text-blue-500" />
            </motion.div>
        </motion.div>
    );
};

const DatabaseSetup = () => {
    const variants = {
        initial: { width: 0 },
        animate: { width: "100%", transition: { duration: 0.2 } },
        hover: { width: ["0%", "100%"], transition: { duration: 2 } },
    };
    const arr = new Array(6).fill(0);
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-neutral-950/[0.2] flex-col space-y-2"
        >
            {arr.map((_, i) => (
                <motion.div
                    key={`database-setup-${i}`}
                    variants={variants}
                    style={{ maxWidth: Math.random() * (100 - 40) + 40 + "%" }}
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-neutral-100 dark:bg-neutral-950 w-full h-4"
                ></motion.div>
            ))}
        </motion.div>
    );
};

const LandingPage = () => {
    const variants = {
        initial: { backgroundPosition: "0 50%" },
        animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-neutral-950/[0.2] flex-col space-y-2"
            style={{
                background: "linear-gradient(-45deg, #3b82f6, #14b8a6, #8b5cf6, #06b6d4)",
                backgroundSize: "400% 400%",
            }}
        >
            <motion.div className="h-full w-full rounded-lg"></motion.div>
        </motion.div>
    );
};

const TodoApp = () => {
    const first = {
        initial: { x: 20, rotate: -5 },
        hover: { x: 0, rotate: 0 },
    };
    const second = {
        initial: { x: -20, rotate: 5 },
        hover: { x: 0, rotate: 0 },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-neutral-950/[0.2] flex-row space-x-2"
        >
            <motion.div
                variants={first}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-neutral-950 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <Image
                    src="https://avatar.vercel.sh/john"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Create new tasks
                </p>
                <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Productive
                </p>
            </motion.div>
            <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-neutral-950 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
                <Image
                    src="https://avatar.vercel.sh/michael"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Manage your tasks efficiently
                </p>
                <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Organized
                </p>
            </motion.div>
            <motion.div
                variants={second}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-neutral-950 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <Image
                    src="https://avatar.vercel.sh/joe"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Track your progress
                </p>
                <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Insightful
                </p>
            </motion.div>
        </motion.div>
    );
};

const AdminSection = () => {
    const variants = {
        initial: { x: 0 },
        animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
    };
    const variantsSecond = {
        initial: { x: 0 },
        animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-neutral-950/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-neutral-950"
            >
                <Image
                    src="https://avatar.vercel.sh/admin"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="text-xs text-neutral-500">
                    Manage users, monitor system performance, and configure application settings...
                </p>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-neutral-950"
            >
                <p className="text-xs text-neutral-500">Admin Dashboard</p>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex-shrink-0" />
            </motion.div>
        </motion.div>
    );
};

const items = [
    {
        title: "Secure Authentication",
        description: (
            <span className="text-sm">
                Robust user authentication powered by Clerk for a seamless and secure experience.
            </span>
        ),
        header: <AuthSetup />,
        className: "md:col-span-1",
        icon: <IconLock className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Efficient Database",
        description: (
            <span className="text-sm">
                Neon with Drizzle ORM for fast, reliable, and scalable data management.
            </span>
        ),
        header: <DatabaseSetup />,
        className: "md:col-span-1",
        icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Modern Landing Page",
        description: (
            <span className="text-sm">
                Engaging landing page with hero section, pricing table, and call-to-action elements.
            </span>
        ),
        header: <LandingPage />,
        className: "md:col-span-1",
        icon: <IconLayoutDashboard className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Functional Todo App",
        description: (
            <span className="text-sm">
                Full-featured Todo application with real-time updates and CRUD operations.
            </span>
        ),
        header: <TodoApp />,
        className: "md:col-span-2",
        icon: <IconChecklist className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Admin Dashboard",
        description: (
            <span className="text-sm">
                Comprehensive admin section for user management and system configuration.
            </span>
        ),
        header: <AdminSection />,
        className: "md:col-span-1",
        icon: <IconUserCircle className="h-4 w-4 text-neutral-500" />,
    },
];