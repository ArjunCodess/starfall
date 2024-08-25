import React from "react";
import BackgroundBeams from "@/components/ui/background-beams";
import Image from "next/image";
import BentoGrid from "@/components/bento-grid";
import { Separator } from "@/components/ui/separator";
import Pricing from "@/components/pricing";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
    return (
        <main className="mx-4">
            <section className="min-h-[30vh] flex flex-col justify-center items-center mt-20 md:mt-0">
                <BackgroundBeams className="flex flex-col text-center">
                    <h2 className="text-4xl relative md:text-5xl lg:text-7xl font-bold text-black dark:text-white font-sans tracking-tight">
                        Neon OSS Starter Kit Challenge Submission by @ArjunCodess
                    </h2>
                    <p className="md:mx-20 mt-5 mb-5 md:mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic reprehenderit repellendus quibusdam neque iusto repellat!</p>
                    <StarsBackground />
                </BackgroundBeams>
                <Image src="/hero.webp" className="w-full rounded-md border-2 border-neutral-400" width={500} height={500} alt="Main Product Image" />
            </section>

            <Separator className="my-20" />

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
        </main>
    );
}