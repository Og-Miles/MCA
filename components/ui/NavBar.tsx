"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "../../Assets/Logo.png";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-transparent backdrop-blur-sm border-b border-b-transparent border-transparent pb-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <nav className='pt-5 bg-transparent'>
        <div className='max-w-7xl mx-auto px-5 lg:px-10 flex justify-between items-center'>
          <div className='text-lg font-bold text-white'>
            <Link href='/'>
              <Image src={Logo} className='w-8 h-8 z-50' alt='Logo' />
            </Link>
          </div>

          {/* Hamburger Icon (visible on mobile) */}
          <div className='lg:hidden'>
            <div
              className='text-white focus:outline-none'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5'
                />
              </svg>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <ul className='absolute top-12 left-0 w-full bg-blue-950 text-white flex flex-col items-center gap-4 py-4'>
                <li>
                  <a href='#about' onClick={() => setIsMobileMenuOpen(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href='#works' onClick={() => setIsMobileMenuOpen(false)}>
                    Works
                  </a>
                </li>
                <li>
                  <a
                    href='https://moore-blog.vercel.app'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#contact' onClick={() => setIsMobileMenuOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Desktop Menu */}
          <ul className='lg:flex gap-6 text-white hidden'>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='#works'>Works</a>
            </li>
            <li>
              <a href='https://moore-blog.vercel.app'>Blog</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>

          {/* Desktop Button */}
          <div className='items-center justify-center hidden lg:flex'>
            <Button text='See Our Plans' className='px-4 py-2 text-white' />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
