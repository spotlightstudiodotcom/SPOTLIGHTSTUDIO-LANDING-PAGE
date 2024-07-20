import { TextGenerateEffect } from "@/app/ui/text-generate-effect";
import MaxWidthWrapper from "./MaxWidth";
import { TabsDemo } from "./TabsDemo";

export const Services = () => {
    
    const words = "Transformamos suas ideias em realidade digital com páginas de destino que se destacam. Nossa equipe especializada oferece:"
    
    return (
        <section id="services">
            <MaxWidthWrapper className="pt-10">
                <h2 className="text-white text-4xl md:text-7xl font-bold font-Integral mb-4">O que oferecemos</h2>
                <TextGenerateEffect className="text-white font-normal lg:text-lg text-base max-w-prose mb-8" words={words} />
                <TabsDemo />
            </MaxWidthWrapper>
        </section>
    )
};
