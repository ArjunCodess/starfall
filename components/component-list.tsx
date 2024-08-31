"use client"

import { Server } from "lucide-react"
import { Component, ComponentContent, ComponentTitle } from "./ui/component"

import Cube from "@/components/admin/3d-cube"
import Pricing from "@/components/admin/pricing"
import Hero from "@/components/admin/hero"
import Authentication from "@/components/admin/authentication"

export default function ComponentList() {
    return (
        <section>
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                    Admin Components
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">These are the components you can use in your application. (<code>@/components/@/components/admin</code>)</p>
            </div>
            <div className='flex flex-col gap-10'>
                <Component>
                    <ComponentTitle>
                        <Server className="w-4 h-4" />
                        3D Cube (@/components/admin/3d-cube.tsx)
                    </ComponentTitle>
                    <ComponentContent>
                        <div className="h-96 w-full flex justify-center items-center">
                            <Cube />
                        </div>
                    </ComponentContent>
                </Component>
                <Component>
                    <ComponentTitle>
                        <Server className="w-4 h-4" />
                        Pricing (@/components/admin/pricing.tsx)
                    </ComponentTitle>
                    <ComponentContent>
                        <div className="h-auto w-full flex justify-center items-center">
                            <Pricing />
                        </div>
                    </ComponentContent>
                </Component>
                <Component>
                    <ComponentTitle>
                        <Server className="w-4 h-4" />
                        Hero (@/components/admin/hero.tsx)
                    </ComponentTitle>
                    <ComponentContent className="bg-neutral-100">
                        <div className="h-auto w-full flex justify-center items-center">
                            <Hero />
                        </div>
                    </ComponentContent>
                </Component>
                <Component>
                    <ComponentTitle>
                        <Server className="w-4 h-4" />
                        Authentication (@/components/admin/authentication.tsx)
                    </ComponentTitle>
                    <ComponentContent className="bg-gradient-to-bl from-primary-foreground via-primary-foreground to-background">
                        <div className="py-10 h-auto w-full flex justify-center items-center">
                            <Authentication />
                        </div>
                    </ComponentContent>
                </Component>
            </div>
        </section>
    )
}