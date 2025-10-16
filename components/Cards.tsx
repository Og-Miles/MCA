import React from "react";
import Carding from "./ui/Carding";
import { Card } from "@/constants";

const Cards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
      {Card.map((card) => (
        <Carding {...card} key={card.id} />
      ))}
    </div>
  );
};

export default Cards;
