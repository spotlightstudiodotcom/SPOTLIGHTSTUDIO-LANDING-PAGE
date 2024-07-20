import { Spotlight } from "@/app/ui/Spotlight"
import { Button } from "./Button"
import MaxWidthWrapper from "./MaxWidth"
import { TextHeroSection } from "./TextHeroSection"

export const Hero = () => {
    return (
        <main id="home" className="w-full min-h-screen bg-black relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
            <MaxWidthWrapper className="py-0 px-0 lg:px-0">
            <div className="w-full pt-20 lg:pt-0 min-h-dvh flex md:items-center md:justify-center bg-black antialiased bg-dot-white/20 relative overflow-hidden">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20 " 
                    fill="white"
                />
                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full md:pt-0">
                    <h1 className="text-4xl font-Integral md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    <TextHeroSection />
                    </h1>
                    <p className="mt-4 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto">
                    Spotlight effect is a great way to draw attention to a specific part
                    of the page. Here, we are drawing the attention towards the text
                    section of the page. I don&apos;t know why but I&apos;m running out of
                    copy.
                    </p>
                    <div className="flex justify-center mt-10">
                        <Button content="Get Started" className="lg:text-lg"/>
                    </div>
                </div>
            </div>
            </MaxWidthWrapper>
        </main>
    )
}