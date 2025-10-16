"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface KeysProps {
  text: string;
  subtext: string;
  icon?: StaticImageData | React.ReactNode | null;
}

const Keys: React.FC<KeysProps> = ({ text, subtext, icon }) => {
  return (
    <div className='flex flex-col items-center text-white'>
      <div className='w-12 h-12 mb-2 flex items-center justify-center'>
        {/* ✅ Safe check for icon */}
        {icon && typeof icon === "object" && "src" in icon ? (
          <Image
            src={icon as StaticImageData}
            alt={text}
            className='w-10 h-10 object-contain'
          />
        ) : (
          icon // If it's an icon component (like from lucide-react)
        )}
      </div>

      <p className='text-lg font-bold'>{text}</p>
      <p className='text-sm text-gray-300'>{subtext}</p>
    </div>
  );
};

export default Keys;
