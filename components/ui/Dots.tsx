import React from "react";

export function Dots() {
  return (
    <div className='h-[500px] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.2]  flex items-center justify-center absolute top-0 left-0'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
    </div>
  );
}
