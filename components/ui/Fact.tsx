import React, { ReactNode } from "react";

const Fact = ({
  text,
  icon,
  subtext,
}: {
  text: string;
  icon: ReactNode;
  subtext: string;
}) => {
  return (
    <div className='flex flex-1 justify-between items-center min-w-[125px] flex-col'>
      <h3 className='text-2xl lg:text-4xl font-bold text-white'>
        {text}
        <span className='text-2xl lg:text-4xl font-bold text-blue-700'>
          {icon}
        </span>
      </h3>
      <h4 className='flex justify-center items-center w-full text-xs md:text-md'>
        {subtext}
      </h4>
    </div>
  );
};

export default Fact;
