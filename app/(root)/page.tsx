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
import VideoPlayer from "@/components/video-player";

export default function Home() {
    return (
        <main className="mx-4 sm:mx-6 md:mx-8 lg:mx-12">
            <div
                aria-hidden="true"
                className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 w-full"
            >
                <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
                <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground to-background" />
            </div>

            <section className="min-h-[30vh] flex flex-col justify-center items-center mt-7 sm:mt-10 md:mt-0">
                <BackgroundBeams className="flex flex-col text-center px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-black dark:text-white font-sans tracking-tight">
                        Neon OSS Starter Kit Challenge Submission by @ArjunCodess
                    </h2>
                    <p className="mt-3 sm:mt-4 md:mt-5 mb-5 md:mb-0 text-sm sm:text-base md:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic reprehenderit repellendus quibusdam neque iusto repellat!</p>
                    <StarsBackgroundLight />
                    <StarsBackgroundDark />
                </BackgroundBeams>
                <VideoPlayer
                    thumbnailSrc="/hero.webp"
                    videoSrc="/rickroll.mp4"
                    title="Main Video"
                />
            </section>

            <Separator className="mt-16 sm:mt-20 mb-8 sm:mb-10" />

            <section>
                <h2 className="my-4 sm:my-5 text-center text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm">TRUSTED BY TEAMS FROM AROUND THE WORLD</h2>
                <Logos />
            </section>

            <Separator className="mt-6 sm:mt-7 mb-16 sm:mb-20" />

            <section>
                <div className="text-center flex flex-col gap-4 sm:gap-5 mb-6 sm:mb-7">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Neon OSS Starter Kit Challenge Submission</h1>
                    <p className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 lg:px-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic reprehenderit repellendus quibusdam neque iusto repellat!</p>
                </div>
                <BentoGrid />
            </section>

            <Separator className="my-16 sm:my-20" />

            <section>
                <div className="text-center flex flex-col gap-4 sm:gap-5 mb-6 sm:mb-7">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Simple pricing for everyone.</h1>
                    <p className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8">Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
                </div>
                <Pricing />
            </section>

            <Separator className="my-16 sm:my-20" />

            <section>
                <CallToAction />
            </section>

            <div className="mt-20" />
        </main>
    );
}