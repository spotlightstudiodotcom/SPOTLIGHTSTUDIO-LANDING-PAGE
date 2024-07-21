"use client";
import React from 'react';
import MaxWidthWrapper from "./MaxWidth";
import { FlipLink } from "@/app/lib/Animation";
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner'

interface FormInput {
  name: string;
  email: string;
  message: string;
}


export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset} = useForm<FormInput>();

    async function onSubmit(formData:FormInput) {
      await fetch('/api/emails',{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
          name : formData.name,
          email : formData.email,
          message : formData.message
        })
      }).then(()=> {
        toast.success('Email enviado com sucesso!');
      })
      reset();
    }

  return (
   
    <MaxWidthWrapper className="py-8">
      <section className="flex flex-col md:flex-row items-start justify-between gap-11">
        <Toaster position="top-right" className=''  visibleToasts={1} />
        <h2 className="font-Integral text-4xl lg:text-7xl text-white text-wrap max-w-5xl">Quero entrar em contato</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-white w-full grid grid-cols-1 gap-4 place-content-start">
          <label className="text-white text-base lg:text-lg">Meu nome é</label>
          <input
            {...register('name')}
            name="name"
            className="placeholder:text-white px-2 bg-transparent border-b border-b-white/70 pb-2 focus:outline-none focus:border-b-white focus:border-b-2"
            placeholder="Seu nome"
            type="text"
            required
          />
          <label className="text-white text-base lg:text-lg">e eu estou interessado em</label>
          <input
            {...register('message')}
            name="message"
            className="placeholder:text-white px-2 bg-transparent border-b border-b-white/70 pb-2 focus:outline-none focus:border-b-white focus:border-b-2"
            placeholder="Nome do serviço"
            type="text"
            required
          />
          <label className="text-white text-base lg:text-lg">é o meu e-mail e</label>
          <input
            {...register('email')}
            name="email"
            className="placeholder:text-white px-2 bg-transparent border-b border-b-white/70 pb-2 focus:outline-none focus:border-b-white focus:border-b-2"
            placeholder="nome@email.com"
            type="email"
            required
          />
          <button className="overflow-hidden font-Integral text-7xl max-w-fit h-full" type="submit">
            <FlipLink className="text-4xl lg:text-7xl">Enviar</FlipLink>
          </button>
        </form>
      </section>
    </MaxWidthWrapper>
  );
};
