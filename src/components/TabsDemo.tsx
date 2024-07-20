"use client";

import Image from "next/image";
import { Tabs } from "@/app/ui/tabs";
export function TabsDemo() {
  const tabs = [
    {
      title: "SEO",
      value: "seo",
      content: (
        <Image
        src="/SEO.webp"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
      ),
    },
    {
      title: "Web Design",
      value: "Web design",
      content: (
        <div className="overflow-hidden relative h-full">
          <Image
            src="/WEBDESIGN.webp"
            alt="dummy image"
            width={1000}
            height={1000}
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          >
            
          </Image>
        </div>
      ),
    },
    {
      title: "Responsividade",
      value: "responsividade",
      content: (
            <div className="overflow-hidden relative h-full ">
            <Image quality={100} className="object-cover  rounded-xl mx-auto" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYngwYjBncnl1ODc3dGRvNnIwY3NoYmYxa3h1eWV4Y3kzMXI1c3VkeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8PpFJcG4y8HqsxQumz/giphy.webp" alt="gif" width={1000} height={1000} />
            </div>
      ),
    },
    {
      title: "Desenvolvimento",
      value: "desenvolvimento",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Desenvolvimento</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col w-full items-start justify-start mb-40 ">
      <Tabs tabs={tabs} />
    </div>
  );
}
