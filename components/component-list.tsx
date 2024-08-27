"use client"

import { Server } from "lucide-react"
import { Component, ComponentContent, ComponentTitle } from "./ui/component"

import Cube from "./admin-components/3d-cube"
import Pricing from "./admin-components/pricing"
import Hero from "./admin-components/hero"
import Authentication from "./admin-components/authentication"

export default function ComponentList() {
    return (
        <section>
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                    Admin Components
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">These are the components you can use in your application. (<code>@/components/admin-components</code>)</p>
            </div>
            <div className='flex flex-col gap-10'>
                <Component>
                    <ComponentTitle>
                        <Server className="w-4 h-4" />
                        3D Cube (admin-components/3d-cube.tsx)
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
                        Pricing (admin-components/pricing.tsx)
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
                        Hero (admin-components/hero.tsx)
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
                        Authentication (admin-components/authentication.tsx)
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