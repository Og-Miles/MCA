"use client";
import React, { ReactNode } from "react";

const Button = ({
  icon,
  text,
  onClick,
  className = "",
}: {
  icon?: ReactNode;
  text: string;
  onClick?: () => void;
  className?: string;
}) => {
  const defaultClasses =
    "text-center justify-center bg-blue-600 rounded-full py-3 px-10 w-fit items-center mx-auto lg:mx-0 cursor-pointer";

  return (
    <div onClick={onClick} className={`${defaultClasses} ${className}`}>
      {text}
      {icon && <span className='ml-2 h-6 w-6'>{icon}</span>}
    </div>
  );
};

export default Button;
