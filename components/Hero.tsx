"use client";
import React from "react";
import { Dots } from "./ui/Dots";
import Button from "./ui/Button";
import Keys from "./ui/Keys";
import { Percent, Pie, lock } from "../Assets/index";
// import Navbar from "./ui/NavBar";

const Hero = () => {
  return (
    <div className='h-screen relative pb-20 pt-36 '>
      {/* Put the NavBar Here */}

      {/* Dots component visible on mobile only */}
      <div className='block lg:hidden'>
        <Dots />
      </div>

      {/* Christmas video background visible on larger screens */}
      <div className='hidden lg:block absolute top-0 left-0 w-full h-screen z-1'>
        <video
          src={"/Christmas.mp4"}
          autoPlay
          loop
          muted
          className='w-full h-screen object-cover'
        />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl sm:px-10 px-5 justify-center w-full mx-auto mt-1 lg:mt-20'>
        <h1 className='text-white text-5xl lg:text-7xl font-bold text-center lg:text-left lg:w-[800px] mb-5'>
          Designs That Define Your Brand
        </h1>
        <div className='flex gap-4 lg:gap-10 xs:justify-between lg:justify-start mb-10'>
          <Keys text='Secured' subtext='Websites' icon={lock} />
          <Keys text='Up to 20%' subtext='Discount' icon={Percent} />
          <Keys text='Analytics' subtext='For SEO' icon={Pie} />
        </div>
        <Button text={"Get Started"} icon={""} className='text-white' />
      </div>
    </div>
  );
};

export default Hero;
