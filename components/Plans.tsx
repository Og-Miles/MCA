import React from "react";
import { Pricing } from "./ui/Pricing";

const Plans = () => {
  return (
    <main className='flex mx-auto justify-center flex-col items-center'>
      <h1 className='text-white text-7xl mb-8 text-center font-poppins'>
        Choose Your Service
      </h1>
      <p className='text-white text-center mb-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempora
        dolor ullam quas.
      </p>
      <Pricing />
      <p className='text-white-100 mt-5 text-center'>
        {" "}
        * NB: All Service Plans are Base price only
      </p>
    </main>
  );
};

export default Plans;
