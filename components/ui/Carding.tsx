import Image from "next/image";
import React from "react";

const Carding = ({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: any;
}) => {
  return (
    <div className='bg-gray-500 flex flex-col px-10 mx-auto py-4 min-h-[150px] min-w-[200px] hover:bg-blue-600 justify-between pb-10'>
      <Image src={icon} className='mb-[64px] mt-[32px]' alt='icon' />
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className='pt-[16px]'>{content}</p>
    </div>
  );
};

export default Carding;
