import React from 'react'
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Authentication() {
    return (
        <form>
            <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                <Card>
                    <CardHeader className="text-center">
                        <h2 className="text-2xl font-semibold leading-none tracking-tight">
                            Start your free trial
                        </h2>
                        <CardDescription>
                            Already have an account?{" "}
                            <a
                                className="text-primary hover:underline underline-offset-4"
                                href="#"
                            >
                                Sign in here
                            </a>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button className="w-full" variant={"outline"}>
                            <svg
                                className="w-4 h-auto mr-2"
                                width={46}
                                height={47}
                                viewBox="0 0 46 47"
                                fill="none"
                            >
                                <path
                                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                                    fill="#EB4335"
                                />
                            </svg>
                            Sign up with Google
                        </Button>
                        <div className="relative mt-5">
                                <div className="flex items-center text-xs text-muted-foreground uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:before:border-gray-700 dark:after:border-gray-700">
                                    Or
                                </div>
                        </div>
                        <div className="mt-5">
                            <div className="grid grid-cols-2 gap-4">
                                <Input placeholder="First name" />
                                <Input placeholder="Last name" />
                                <Input placeholder="Email" />
                                <Input placeholder="Company name" />
                                <Input
                                    className="col-span-2"
                                    placeholder="New password"
                                />
                                <Input
                                    className="col-span-2"
                                    placeholder="Current password"
                                />
                                <div className="flex items-center space-x-2 mt-3 col-span-2">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">
                                        Accept terms and conditions
                                    </Label>
                                </div>
                                <Button className="mt-3 col-span-2">
                                    Get started
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </form>
    )
}
