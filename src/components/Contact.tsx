'use client';
import React, { useContext, useState } from 'react';
import MaxWidthWrapper from './MaxWidth';
import { useForm } from 'react-hook-form';
import { Button } from '@/app/ui/Button';
import { motion, useInView } from 'framer-motion';
import { DragCloseDrawer } from './DragCloseDrawer';
import { ThemeContext } from '@/app/context/Context';
import { cn } from '@/app/lib/utils';
import Image from 'next/image';

interface FormInput {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { theme } = useContext(ThemeContext);
  const imageRef = React.useRef(null);
  const isInView = useInView(imageRef, { once: true, amount: 0.9 });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
        message: formData.message,
      }),
    })
      .then(() => {
        setEmailSent(true);
      })
      .catch((error) => {
        // toast.error('Erro ao enviar email: ' + error.message);
      });
    reset();
  }

  const textColor = theme ? 'text-white' : 'text-black';
  const borderColor = theme ? 'border-b-white' : 'border-b-black';
  return (
    <motion.div
      initial={{ backgroundColor: theme ? '#000000' : '#ffffff' }}
      animate={{ backgroundColor: theme ? '#000000' : '#ffffff' }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className={cn('relative h-full')}
      id="contact"
    >
      <MaxWidthWrapper>
        <DragCloseDrawer open={emailSent} setOpen={setEmailSent}>
          <h2
            className={cn(
              'mx-auto max-w-5xl text-wrap text-center font-Integral text-2xl lg:text-7xl',
            )}
          >
            Email enviado com sucesso
          </h2>
          <p className={cn('mt-8 text-center text-xs')}>Em breve entraremos em contato.</p>
        </DragCloseDrawer>
        <section className="flex flex-col items-start justify-between gap-11 pt-10 md:flex-row">
          <div className="flex w-full flex-col">
            <h2
              className={cn(
                'mb-4 max-w-5xl text-wrap font-Integral text-2xl lg:mb-10 lg:text-7xl',
                textColor,
              )}
            >
              Quero entrar em contato
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={cn('grid w-full grid-cols-1 place-content-start gap-4', textColor)}
            >
              <label className={cn('text-xs lg:text-lg', textColor)}>Meu nome é</label>
              <input
                {...register('name', { required: true, maxLength: 60, minLength: 7 })}
                name="name"
                className={cn(
                  'border-x-0 border-b border-t-0 bg-transparent px-0 pb-2 placeholder:text-xs placeholder:text-current focus:border-x-0 focus:border-b-2 focus:border-t-0 focus:border-b-white focus:px-2 focus:outline-none focus:ring-0 placeholder:lg:text-lg',
                  borderColor,
                )}
                placeholder="Seu nome"
                type="text"
              />
              {errors.name && errors.name.type === 'required' && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={textColor}
                >
                  Preencha o campo de nome com ao menos 7 caracteres
                </motion.span>
              )}
              <label className={cn('text-xs lg:text-lg', textColor)}>
                e eu estou interessado em
              </label>
              <input
                {...register('message', { required: true })}
                name="message"
                className={cn(
                  'border-x-0 border-b border-t-0 bg-transparent px-0 pb-2 placeholder:text-xs placeholder:text-current focus:border-x-0 focus:border-b-2 focus:border-t-0 focus:border-b-white focus:px-2 focus:outline-none focus:ring-0 placeholder:lg:text-lg',
                  borderColor,
                )}
                placeholder="Nome do serviço"
                type="text"
              />
              {errors.message && errors.message.type === 'required' && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={textColor}
                >
                  Preencha o campo de mensagem
                </motion.span>
              )}
              <label className={cn('text-base lg:text-lg', textColor)}>e o meu e-mail é</label>
              <input
                {...register('email', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                name="email"
                className={cn(
                  'border-x-0 border-b border-t-0 bg-transparent px-0 pb-2 placeholder:text-xs placeholder:text-current focus:border-x-0 focus:border-b-2 focus:border-t-0 focus:border-b-white focus:px-2 focus:outline-none focus:ring-0 placeholder:lg:text-lg',
                  borderColor,
                )}
                placeholder="Email@email.com"
                type="email"
              />
              {errors.email && errors.email.type === 'required' && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={textColor}
                >
                  Preencha o campo de email
                </motion.span>
              )}
              {errors.email && errors.email.type === 'pattern' && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={textColor}
                >
                  Insira um e-mail válido
                </motion.span>
              )}
              <Button className={cn('max-w-fit', textColor)} type="submit" text="Enviar" />
            </form>
          </div>
          <motion.div
            className="w-full"
            ref={imageRef}
            initial={{ height: 0, opacity: 0 }}
            animate={isInView ? { height: '100%', opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Image
              src="/spotlight-stock-image.webp"
              alt="spotlight"
              width={800}
              height={800}
              className="h-full w-full rounded-sm object-cover object-center"
            />
          </motion.div>
        </section>
      </MaxWidthWrapper>
    </motion.div>
  );
};
