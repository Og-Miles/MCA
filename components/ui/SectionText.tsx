import React from "react";

const SectionText = ({ text, subtext }: { text: string; subtext: string }) => {
  return (
    <div className='flex flex-col w-full text-center lg:text-left'>
      <h3 className='text-4xl font-bold uppercase mb-2'>{text}</h3>
      <h3 className='mb-10 ld:mb-0'>{subtext}</h3>
    </div>
  );
};

export default SectionText;
