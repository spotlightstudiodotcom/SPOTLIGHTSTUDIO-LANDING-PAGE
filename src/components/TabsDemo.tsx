'use client';

import Image from 'next/image';
import { Tabs } from '@/app/ui/tabs';
export function TabsDemo() {
  const tabs = [
    {
      title: 'SEO',
      value: 'seo',
      content: (
        <Image
          src="/SEO.webp"
          alt="dummy image"
          width="1000"
          height="1000"
          className="absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
        />
      ),
    },
    {
      title: 'Web Design',
      value: 'Web design',
      content: (
        <div className="relative h-full overflow-hidden">
          <Image
            src="/WEBDESIGN.webp"
            alt="dummy image"
            width={1000}
            height={1000}
            className="absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
          ></Image>
        </div>
      ),
    },
    {
      title: 'Responsividade',
      value: 'responsividade',
      content: (
        <div className="relative h-full overflow-hidden">
          <Image
            quality={100}
            className="mx-auto rounded-xl object-cover"
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYngwYjBncnl1ODc3dGRvNnIwY3NoYmYxa3h1eWV4Y3kzMXI1c3VkeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8PpFJcG4y8HqsxQumz/giphy.webp"
            alt="gif"
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
    {
      title: 'Desenvolvimento',
      value: 'desenvolvimento',
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Desenvolvimento</p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative mb-40 flex h-[20rem] w-full flex-col items-start justify-start [perspective:1000px] md:h-[40rem]">
      <Tabs tabs={tabs} />
    </div>
  );
}
