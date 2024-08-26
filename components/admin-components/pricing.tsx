'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CheckIcon, MinusIcon } from "lucide-react";

interface PlanFeature {
    type: string;
    features: {
        name: string;
        free: boolean;
        startup: boolean;
        team: boolean;
        enterprise: boolean;
    }[];
}

const planFeatures: PlanFeature[] = [
    {
        type: "Financial data",
        features: [
            {
                name: "Open/High/Low/Close",
                free: true,
                startup: true,
                team: true,
                enterprise: true,
            },
            {
                name: "Price-volume difference indicator	",
                free: true,
                startup: true,
                team: true,
                enterprise: true,
            },
        ],
    },
    {
        type: "On-chain data",
        features: [
            {
                name: "Network growth",
                free: true,
                startup: false,
                team: true,
                enterprise: true,
            },
            {
                name: "Average token age consumed",
                free: true,
                startup: false,
                team: true,
                enterprise: true,
            },
            {
                name: "Exchange flow",
                free: false,
                startup: false,
                team: true,
                enterprise: true,
            },
            {
                name: "Total ERC20 exchange funds flow",
                free: false,
                startup: false,
                team: true,
                enterprise: true,
            },
        ],
    },
];

export default function Pricing() {
    return (
        <div className="w-full bg-gradient-to-bl from-primary-foreground via-primary-foreground to-background text-foreground">
            <div className="container py-24 lg:py-32">
                <div className="text-center flex flex-col gap-5 mb-14">
                    <h1 className="text-3xl md:text-5xl font-bold">Simple pricing for everyone.</h1>
                    <p>Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
                </div>
                <div className="flex justify-center items-center pb-5">
                    <Label htmlFor="payment-schedule" className="me-3">
                        Monthly
                    </Label>
                    <Switch id="payment-schedule" />
                    <Label htmlFor="payment-schedule" className="relative ms-3">
                        Annual
                        <span className="absolute -top-10 start-auto -end-28">
                            <span className="flex items-center">
                                <svg
                                    className="w-14 h-8 -me-6 text-muted-foreground"
                                    width={45}
                                    height={25}
                                    viewBox="0 0 45 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <Badge className="mt-3 uppercase">Save up to 10%</Badge>
                            </span>
                        </span>
                    </Label>
                </div>
                <div className="container px-4 md:px-6 pt-4">
                    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
                        <div className="flex flex-col p-6 shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300 transform hover:scale-105 transition-all duration-300">
                            <div>
                                <h3 className="text-2xl font-bold text-center">Basic</h3>
                                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-100">
                                    <span className="text-4xl font-bold">$29</span>/ month
                                </div>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        720p Video Rendering
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        2GB Cloud Storage
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Basic Video Templates
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <Button className="w-full">Get Started</Button>
                            </div>
                        </div>
                        <div className="relative flex flex-col p-6 shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500 transform scale-105">
                            <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                Popular
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-center">Pro</h3>
                                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-100">
                                    <span className="text-4xl font-bold">$59</span>/ month
                                </div>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1" />
                                        1080p Video Rendering
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        10GB Cloud Storage
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Premium Video Templates
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Collaboration Tools
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">Get Started</Button>
                            </div>
                        </div>
                        <div className="flex flex-col p-6 shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300 transform hover:scale-105 transition-all duration-300">
                            <div>
                                <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-100">
                                    <span className="text-4xl font-bold">$99</span>/ month
                                </div>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        4K Video Rendering
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Unlimited Cloud Storage
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Custom Video Templates
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Advanced Collaboration Tools
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                                        Dedicated Support
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <Button className="w-full">Get Started</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 lg:mt-32">
                    <div className="lg:text-center mb-14">
                        <h1 className="text-3xl md:text-5xl font-bold">Compare plans.</h1>
                    </div>
                    <Table className="hidden lg:table">
                        <TableHeader>
                            <TableRow className="hover:bg-muted/50">
                                <TableHead className="w-3/12 text-primary">Plans</TableHead>
                                <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                                    Free
                                </TableHead>
                                <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                                    Startup
                                </TableHead>
                                <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                                    Enterprise
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {planFeatures.map((featureType) => (
                                <>
                                    <TableRow className="bg-muted/50" key={featureType.type}>
                                        <TableCell colSpan={5} className="font-bold">
                                            {featureType.type}
                                        </TableCell>
                                    </TableRow>
                                    {featureType.features.map((feature) => (
                                        <TableRow
                                            key={feature.name}
                                            className="text-muted-foreground"
                                        >
                                            <TableCell>{feature.name}</TableCell>
                                            <TableCell>
                                                <div className="mx-auto w-min">
                                                    {feature.free ? (
                                                        <CheckIcon className="h-5 w-5 text-primary" />
                                                    ) : (
                                                        <MinusIcon className="h-5 w-5" />
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="mx-auto w-min">
                                                    {feature.startup ? (
                                                        <CheckIcon className="h-5 w-5 text-primary" />
                                                    ) : (
                                                        <MinusIcon className="h-5 w-5" />
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="mx-auto w-min">
                                                    {feature.enterprise ? (
                                                        <CheckIcon className="h-5 w-5 text-primary" />
                                                    ) : (
                                                        <MinusIcon className="h-5 w-5" />
                                                    )}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="space-y-24 lg:hidden">
                        {['Free', 'Startup', 'Team', 'Enterprise'].map((plan) => (
                            <section key={plan}>
                                <div className="mb-4">
                                    <h4 className="text-xl font-medium">{plan}</h4>
                                </div>
                                <Table>
                                    {planFeatures.map((featureType) => (
                                        <>
                                            <TableRow
                                                key={featureType.type}
                                                className="bg-muted/50 hover:bg-muted"
                                            >
                                                <TableCell
                                                    colSpan={2}
                                                    className="w-10/12 text-primary font-bold"
                                                >
                                                    {featureType.type}
                                                </TableCell>
                                            </TableRow>
                                            {featureType.features.map((feature) => (
                                                <TableRow
                                                    className="text-mute-foreground"
                                                    key={feature.name}
                                                >
                                                    <TableCell className="w-11/12">
                                                        {feature.name}
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        {feature.enterprise ? (
                                                            <CheckIcon className="h-5 w-5 text-primary" />
                                                        ) : (
                                                            <MinusIcon className="h-5 w-5" />
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </>
                                    ))}
                                </Table>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}