"use client";
import React, { useContext, useState } from 'react';
import MaxWidthWrapper from "./MaxWidth";
import { useForm } from 'react-hook-form';
import { Button } from '@/app/ui/Button';
import { motion } from 'framer-motion';
import { DragCloseDrawer } from './DragCloseDrawer';
import { ThemeContext } from '@/app/context/Context';
import { cn } from '@/app/lib/utils';

interface FormInput {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { theme } = useContext(ThemeContext);

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

  const textColor = theme ? "text-white" : "text-black";
  const borderColor = theme ? "border-b-white" : "border-b-black";
  const color = theme ? "#ffffff" : "#000000";
  return (
    <motion.div
      initial={{ backgroundColor: theme ? "#000000" : "#ffffff" }}
      animate={{ backgroundColor: theme ? "#000000" : "#ffffff" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={cn("py-8 h-screen relative")}
    > 
    {/* <Particles
        className="absolute inset-0"
        quantity={140}
        ease={80}
        color={color}
        refresh
      /> */}
      <MaxWidthWrapper>
        <DragCloseDrawer open={emailSent} setOpen={setEmailSent}>
          <h2 className={cn("font-Integral text-4xl lg:text-7xl text-wrap max-w-5xl mx-auto text-center")}>Email enviado com sucesso</h2>
          <p className={cn("text-base text-center mt-8")}>Em breve entraremos em contato.</p>
        </DragCloseDrawer>
        <section className="flex flex-col md:flex-row items-start justify-between gap-11">
          <h2 className={cn("font-Integral text-4xl lg:text-7xl text-wrap max-w-5xl", textColor)}>Quero entrar em contato</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={cn("w-full grid grid-cols-1 gap-4 place-content-start", textColor)}>
            <label className={cn("text-base lg:text-lg", textColor)}>Meu nome é</label>
            <input
              {...register('name', { required: true, maxLength: 60, minLength: 7 })}
              name="name"
              className={cn("placeholder:text-current focus:px-2 px-0 focus:border-b-white bg-transparent border-b focus:ring-0 border-x-0 border-t-0 focus:border-t-0 focus:border-x-0 pb-2 focus:outline-none focus:border-b-2", borderColor)}
              placeholder="Seu nome"
              type="text"
            />
            {errors.name && errors.name.type === "required" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={textColor}
              >
                Preencha o campo de nome com ao menos 7 caracteres
              </motion.span>
            )}
            <label className={cn("text-base lg:text-lg", textColor)}>e eu estou interessado em</label>
            <input
              {...register('message', { required: true })}
              name="message"
              className={cn("placeholder:text-current focus:px-2 focus:border-b-white px-0 bg-transparent border-b focus:ring-0 focus:border-t-0 border-x-0 border-t-0 focus:border-x-0 pb-2 focus:outline-none focus:border-b-2", borderColor)}
              placeholder="Nome do serviço"
              type="text"
            />
            {errors.message && errors.message.type === "required" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={textColor}
              >
                Preencha o campo de mensagem
              </motion.span>
            )}
            <label className={cn("text-base lg:text-lg", textColor)}>e o meu e-mail é</label>
            <input
              {...register('email', { 
                required: true, 
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
              })}
              name="email"
              className={cn("placeholder:text-current focus:px-2 focus:border-b-white px-0 bg-transparent border-b focus:ring-0 focus:border-t-0 border-x-0 border-t-0 focus:border-x-0 pb-2 focus:outline-none focus:border-b-2", borderColor)}
              placeholder="nome@email.com"
              type="email"
            />
            {errors.email && errors.email.type === "required" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={textColor}
              >
                Preencha o campo de email
              </motion.span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={textColor}
              >
                Insira um e-mail válido
              </motion.span>
            )}
            <Button className={cn("max-w-fit", textColor)} type="submit" text='Enviar' />
          </form>
        </section>
      </MaxWidthWrapper>
    </motion.div>
  );
};
