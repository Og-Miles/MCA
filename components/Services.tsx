import React from "react";
import SectionText from "./ui/SectionText";
import Cards from "./Cards";

const Services = () => {
  return (
    <div className='max-w-7xl mx-auto px-5 lg:px-10 flex flex-col lg:flex-row mt-5 text-white'>
      <SectionText
        text='Know Our Services'
        subtext='Our exceptional design services'
      />

      <Cards />
    </div>
  );
};

export default Services;
