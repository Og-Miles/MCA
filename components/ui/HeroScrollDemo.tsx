"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";
import omchain from "../../omchain.jpg";

export function HeroScrollDemo() {
  return (
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className='text-4xl font-semibold text-black dark:text-white'>
              Transform your Brand ideas into <br />
              <span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
                Unlimited Realities
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={omchain}
          alt='hero'
          height={720}
          width={1400}
          className='mx-auto rounded-2xl object-cover h-full object-left-top'
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
