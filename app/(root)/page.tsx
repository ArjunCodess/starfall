import React from "react";
import BackgroundBeams from "@/components/ui/background-beams";
import Image from "next/image";
import BentoGrid from "@/components/bento-grid";
import { Separator } from "@/components/ui/separator";
import Pricing from "@/components/pricing";
import { StarsBackgroundLight } from "@/components/ui/stars-background-light";
import { StarsBackgroundDark } from "@/components/ui/stars-background-dark";
import Logos from "@/components/logos";
import CallToAction from "@/components/call-to-action";

export default function Home() {
    return (
        <main className="mx-4">
            <div
                aria-hidden="true"
                className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 w-full "
            >
                <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
                <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground to-background" />
            </div>
            <section className="min-h-[30vh] flex flex-col justify-center items-center mt-20 md:mt-0">
                <BackgroundBeams className="flex flex-col text-center">
                    <h2 className="text-3xl relative md:text-5xl lg:text-7xl font-bold text-black dark:text-white font-sans tracking-tight">
                        Neon OSS Starter Kit Challenge Submission by @ArjunCodess
                    </h2>
                    <p className="md:mx-20 mt-5 mb-5 md:mb-0 md:text-base text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic reprehenderit repellendus quibusdam neque iusto repellat!</p>
                    <StarsBackgroundLight />
                    <StarsBackgroundDark />
                </BackgroundBeams>
                <Image src="/hero.webp" className="w-full rounded-md border-2 border-neutral-400" width={500} height={500} alt="Main Product Image" />
            </section>

            <Separator className="mt-20 mb-10" />

            <section>
                <h2 className="my-5 text-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">TRUSTED BY TEAMS FROM AROUND THE WORLD</h2>
                <Logos />
            </section>

            <Separator className="mt-7 mb-20" />

            <section>
                <div className="text-center flex flex-col gap-5 mb-7">
                    <h1 className="text-3xl md:text-5xl font-bold">Neon OSS Starter Kit Challenge Submission</h1>
                    <p className="md:mx-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic reprehenderit repellendus quibusdam neque iusto repellat!</p>
                </div>
                <BentoGrid />
            </section>

            <Separator className="my-20" />

            <section>
                <div className="text-center flex flex-col gap-5 mb-7">
                    <h1 className="text-3xl md:text-5xl font-bold">Simple pricing for everyone.</h1>
                    <p>Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
                </div>
                <Pricing />
            </section>

            <Separator className="my-20" />

            <section>
                <CallToAction />
            </section>

            <div className="mt-20" />
        </main>
    );
}