import MaxWidthWrapper from "./MaxWidth"
import { FlipLink } from "@/app/lib/Animation"


export const Contact = () => {
    return (
        <MaxWidthWrapper className="py-8">
            <section className="flex flex-col md:flex-row items-start justify-between gap-11">
                <h2 className="font-Integral text-4xl lg:text-7xl text-white text-wrap max-w-5xl">Quero entrar em contato</h2>
                <form className="text-white w-full grid grid-cols-1 gap-4 place-content-start">
                    <label className="text-white text-base lg:text-lg ">Meu nome é</label> <input className="placeholder:text-white bg-transparent border-b border-b-white/70 pb-2 focus:outline-none focus:border-b-white focus:border-b-2" placeholder="Seu nome" type="text" />
                    <label className="text-white text-base lg:text-lg ">e eu estou interessado em</label> <input className="placeholder:text-white bg-transparent border-b border-b-white/70 pb-2 focus:outline-none focus:border-b-white focus:border-b-2" placeholder="Nome do serviço." type="text" />
                    <label className="text-white text-base lg:text-lg ">È o meu e-mail e</label> <input className="placeholder:text-white bg-transparent border-b border-b-white/70 pb-2 focus:outline-none focus:border-b-white focus:border-b-2" placeholder="nome@email.com" type="text" />
                    <button className="overflow-hidden font-Integral hover:transition-colors text-7xl max-w-fit h-full " type="submit">
                        <FlipLink className="text-4xl lg:text-7xl">Enviar</FlipLink>
                    </button>
                </form>
            </section>
        </MaxWidthWrapper>
    )
}