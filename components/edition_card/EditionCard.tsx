"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { urlForImage } from "lib/sanity.image";
import Link from "next/link";

export function EditionCard({title, description, coverImage, download_url}) {
  return (
    <CardContainer className="inter-var w-[80%] ">
      <CardBody className="bg-zinc-50  relative group/card overflow-hidden  hover:shadow-xl shadow-lg   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <div className="absolute -bottom-6 -left-6 z-0 w-48 h-48 bg-gradient-to-t from-blue-300 to-pink-300 blur-[150px]"></div>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
            {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
            {description}
        </CardItem>
        <CardItem translateZ="100" className="mx-auto mt-4">
          <Image
            // src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src={urlForImage(coverImage?.asset._ref)
                .height(900)
                .width(600)
                ?.url()}
            height="1000"
            width="1000"
            className="h-60 w-full object-contain  group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-12  ">
          {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem> */}
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Link href={download_url} target="_blank">Read</Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}




        // Button code
        // <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        //   Shimmer
        // </button>
  
        // tailwind.config.js code
       