"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Logo from "../Assets/Logo.png";

export default function Footer() {
  return (
    <footer className='relative z-20'>
      {/* ===== TOP CTA (pixel-detailed gradient) ===== */}
      <div className='relative overflow-hidden'>
        {/* main gradient background (exact-ish to screenshot) */}
        <div
          aria-hidden
          className='absolute inset-0'
          style={{
            background:
              "linear-gradient(90deg, #5f2eea 0%, #6b4eff 40%, #a259ff 100%)",
          }}
        />

        {/* layered radial glows for depth */}
        <div
          aria-hidden
          className='absolute -left-24 -top-24 w-[520px] h-[520px] rounded-full filter blur-3xl opacity-40 pointer-events-none'
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), rgba(95,46,234,0.06) 20%, transparent 45%)",
          }}
        />
        <div
          aria-hidden
          className='absolute -right-28 -bottom-28 w-[480px] h-[480px] rounded-full filter blur-2xl opacity-30 pointer-events-none'
          style={{
            background:
              "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.06), rgba(162,89,255,0.06) 18%, transparent 48%)",
          }}
        />

        {/* subtle diagonal stripe overlay (very low opacity for texture) */}
        <div
          aria-hidden
          className='absolute inset-0 pointer-events-none'
          style={{
            background:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 10px)",
          }}
        />

        {/* CTA content - centered inside a constrained container */}
        <div className='relative max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32'>
          <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
            {/* Text column */}
            <div className='lg:col-span-7'>
              <h2
                className='text-white font-extrabold leading-tight -tracking-tighter'
                style={{ fontSize: "2.2rem" /* mobile */ }}
              >
                <span className='block text-3xl md:text-4xl lg:text-5xl'>
                  Take your business to the
                </span>
                <span className='block text-3xl md:text-4xl lg:text-5xl'>
                  next level.
                </span>
              </h2>

              <p className='mt-4 max-w-[66ch] text-gray-100 text-sm md:text-base leading-relaxed'>
                Get more insights, professional branding and high-converting
                designs built to scale. Start today and experience expert
                delivery, clear milestones, and measurable growth.
              </p>

              <div className='mt-6 flex items-center space-x-4'>
                <Link
                  href='/contact'
                  className='inline-flex items-center justify-center whitespace-nowrap px-6 py-3 rounded-full bg-white text-[#5f2eea] font-semibold shadow-[0_8px_30px_rgba(95,46,234,0.25)] hover:shadow-[0_10px_36px_rgba(95,46,234,0.32)] transition'
                >
                  Get this template →
                </Link>

                <Link
                  href='/pricing'
                  className='inline-flex items-center justify-center whitespace-nowrap px-4 py-2 rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/5 transition'
                >
                  View pricing
                </Link>
              </div>
            </div>

            {/* Right column decorative card (optional visual balance) */}
            <div className='lg:col-span-5 flex justify-center lg:justify-end'>
              <div className='w-full max-w-[360px] bg-white/6 backdrop-blur-sm rounded-2xl p-6 border border-white/8 shadow-lg'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-white/10'>
                    <Image
                      src={Logo}
                      alt='Logo'
                      width={40}
                      height={40}
                      className='object-contain'
                    />
                  </div>
                  <div>
                    <p className='text-sm font-semibold text-white'>
                      Miles Creative
                    </p>
                    <p className='text-xs text-white/80'>
                      Trusted by leading brands
                    </p>
                  </div>
                </div>

                <div className='mt-4 text-sm text-gray-100'>
                  <p className='mb-3'>
                    Professional packages for branding, web, copywriting and
                    video — tailored to convert.
                  </p>
                  <div className='mt-2 flex gap-2'>
                    <span className='inline-block px-3 py-1 rounded-full bg-white/10 text-xs'>
                      Branding
                    </span>
                    <span className='inline-block px-3 py-1 rounded-full bg-white/10 text-xs'>
                      Web
                    </span>
                    <span className='inline-block px-3 py-1 rounded-full bg-white/10 text-xs'>
                      Video
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* END CTA */}
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
              <li>
                <Link href='/404' className='hover:text-white transition'>
                  404
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Contact</h4>
            <p className='text-sm text-gray-400'>contact@yourbrand.com</p>
            <p className='text-sm text-gray-400 mt-2'>+234 812 345 6789</p>
            <p className='text-sm text-gray-400 mt-2'>Lagos, Nigeria</p>
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
