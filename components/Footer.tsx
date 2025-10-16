"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Logo from "../Assets/Logo.png";

export default function Footer() {
  return (
    <footer className='relative z-20'>
      {/* ===== BOTTOM FOOTER (dark) ===== */}
      <div className='bg-black pt-16 pb-8'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12'>
          {/* Brand Section */}
          <div>
            <div className='flex items-center space-x-3 mb-4'>
              <Image
                alt='MCA'
                src={Logo}
                width={32}
                height={32}
                className='w-8 h-8'
              />
            </div>
            <p className='text-sm leading-relaxed text-gray-400'>
              Build a powerful agency site with Framer.
            </p>
          </div>

          {/* Pages Section */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Pages</h4>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link href='/' className='hover:text-white transition'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/services' className='hover:text-white transition'>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/case-studies'
                  className='hover:text-white transition'
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-white transition'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Contact</h4>
            <p className='text-sm text-gray-400'>milescreative.a@gmail.com</p>
            <p className='text-sm text-gray-400 mt-2'>Abuja, Nigeria</p>
          </div>

          {/* Social Section */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Follow us</h4>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='w-9 h-9 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#222] transition'
                aria-label='Facebook'
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href='#'
                className='w-9 h-9 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#222] transition'
                aria-label='LinkedIn'
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href='#'
                className='w-9 h-9 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#222] transition'
                aria-label='Twitter'
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='max-w-7xl mx-auto px-6 lg:px-12 border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 space-y-4 md:space-y-0'>
          <p>© Miles Creative Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
