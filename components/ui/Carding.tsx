import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardingProps {
  title: string;
  content: string;
  icon: string | StaticImageData; // supports both string path and imported image
}

const Carding: React.FC<CardingProps> = ({ title, content, icon }) => {
  return (
    <div className='bg-gray-500 flex flex-col px-10 mx-auto py-4 min-h-[150px] min-w-[200px] hover:bg-blue-600 justify-between pb-10 rounded-2xl text-white'>
      <div className='mb-[64px] mt-[32px] flex justify-center'>
        <Image
          src={icon}
          alt={`${title} icon`}
          width={64} // required for Next/Image
          height={64}
          className='object-contain'
        />
      </div>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className='pt-[16px] text-sm opacity-90'>{content}</p>
    </div>
  );
};

export default Carding;
