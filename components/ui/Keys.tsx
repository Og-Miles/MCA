import Image from "next/image";
import React, { ReactNode } from "react";

const Keys = ({
  text,
  subtext,
  icon,
}: {
  icon?: ReactNode;
  text: string;
  subtext: string;
}) => {
  return (
    <div className='flex flex-wrap justify-between items-center mt-10 mx-auto lg:mx-0'>
      <div className='flex flex-col justify-between tracking-tight w-full'>
        {icon && <Image src={icon} alt={text} className='w-8 h-8 mb-5' />}
        <h3 className='font-bold text-lg -mb-5  text-white'>{text}</h3> <br />
        <h4 className='flex justify-start text-white'>{subtext}</h4>
      </div>
    </div>
  );
};

export default Keys;
