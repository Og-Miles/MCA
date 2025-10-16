import React from "react";
import Fact from "./ui/Fact";

const Facts = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 lg:px-10 flex justify-between items-center mt-5'>
      <div className='flex flex-col lg:flex-row w-full justify-between items-center'>
        <h2 className='uppercase text-[32px] font-normal lg:font-bold lg:text-lg text-center lg:text-left mb-5 lg:mb-0 text-white'>
          Get Aquinted With <br /> Our Key Facts
        </h2>
        <div className='flex justify-between'>
          <Fact icon={"+"} text='27' subtext='Trusted Clients' />
          <Fact icon={"+"} text='35' subtext='Projects Completed' />
          <Fact icon={"%"} text='91' subtext='Clients Satisfaction' />
        </div>
      </div>
    </div>
  );
};

export default Facts;
