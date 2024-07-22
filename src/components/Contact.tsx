"use client";
import React, { useState } from 'react';
import MaxWidthWrapper from "./MaxWidth";
import { useForm } from 'react-hook-form';
import { Button } from '@/app/ui/Button';
import { motion } from 'framer-motion';
import { TextSlideInFromBottom } from '@/app/lib/Animation';

interface FormInput {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormInput>();



  async function onSubmit(formData: FormInput) {
    await fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    }).then(() => {
      setEmailSent(true);
    }).catch((error) => {
      // toast.error('Erro ao enviar email: ' + error.message);
    });
    reset();
  }

  return (
      <MaxWidthWrapper className="py-8">
        <section className="flex flex-col md:flex-row items-start justify-between gap-11">
          <h2 className="font-Integral text-4xl lg:text-7xl text-white text-wrap max-w-5xl">Quero entrar em contato</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="text-white w-full grid grid-cols-1 gap-4 place-content-start">
            <label className="text-white text-base lg:text-lg">Meu nome é</label>
            <input
              {...register('name', { required: true, maxLength: 60, minLength: 7 })}
              name="name"
              className="placeholder:text-white focus:px-2 px-0 bg-transparent border-b focus:ring-0 border-x-0 border-t-0 focus:border-t-0 focus:border-x-0 border-b-white/70 pb-2 focus:outline-none focus:border-b-white focus:border-b-2"
              placeholder="Seu nome"
              type="text"
            />
            {errors.name && errors.name.type === "required" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=''
              >
                Preencha o campo de nome com ao menos 7 caracteres
              </motion.span>
            )}
            <label className="text-white text-base lg:text-lg">e eu estou interessado em</label>
            <input
              {...register('message', { required: true })}
              name="message"
              className="placeholder:text-white focus:px-2 px-0 bg-transparent border-b focus:ring-0 focus:border-t-0 border-x-0 border-t-0 focus:border-x-0 border-b-white/70 pb-2 focus:outline-none focus:border-b-white focus:border-b-2"
              placeholder="Nome do serviço"
              type="text"
            />
            {errors.message && errors.message.type === "required" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=''
              >
                Preencha o campo de mensagem
              </motion.span>
            )}
            <label className="text-white text-base lg:text-lg">é o meu e-mail e</label>
            <input
              {...register('email', { 
                required: true, 
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
              })}
              name="email"
              className="placeholder:text-white focus:px-2 px-0 bg-transparent border-b focus:ring-0 focus:border-t-0 focus:border-x-0 border-x-0 border-t-0 border-b-white/70 pb-2 focus:outline-none focus:border-b-white focus:border-b-2"
              placeholder="nome@email.com"
              type="email"
            />
            {errors.email && errors.email.type === "required" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=''
              >
                Preencha o campo de email
              </motion.span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=''
              >
                Insira um e-mail válido
              </motion.span>
            )}
            <Button className='max-w-fit' type="submit" text='Enviar' />
          </form>
        </section>
      </MaxWidthWrapper>
  );
};
