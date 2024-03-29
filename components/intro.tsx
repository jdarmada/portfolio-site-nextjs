"use client";

import Image from 'next/image'
import React from 'react'
import intropic from '../public/intropic.jpg'
import { delay, motion } from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div 
          initial = {{ opacity: 0, scale: 0 }}
          animate = {{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, type: "tween", stiffness: 100, delay: 0.1 }}
          >

          <Image src= {intropic} alt='profile picture'
          width='192' height= '192' quality= '95' priority={true}
          className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
          <motion.span className='absolute bottom-0 right-0 text-3xl'
          initial = {{ opacity: 0, scale: 0 }}
          animate = {{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 125, delay: 0.2, duration: 0.7 }}
          >
            👋
          </motion.span>
          </motion.div>
        </div>
      </div>

      <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
      initial = {{ opacity: 0, y: 100 }}
      animate = {{ opacity: 1, y: 0 }}
      >
        {`Hi, I'm JD Armada. I'm a full-stack software engineer with 4 years of experience.`}
        
      </motion.p>
      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
      initial = {{ opacity: 0, y: 100 }}
      animate = {{ opacity: 1, y: 0 }}
      transition={{delay: 0.2 }}
      >
        <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
        hover:bg-gray-950 active:scale-105 transition'
        > Contact me here 
        <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/> </Link>
        <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
         active:scale-105 transition cursor-pointer border border-black/10' href='/JD Armada - Final Resume 2024.pdf' download>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/></a>
        <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
         active:scale-105 transition cursor-pointer border border-black/10' href='https://www.linkedin.com/in/jdarmada/' target="_blank" rel="noopener noreferrer">
          <BsLinkedin/>
        </a>
        <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]
         hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10' href='https://github.com/jdarmada' target="_blank" rel="noopener noreferrer"> <FaGithubSquare/> </a>
      </motion.div>
    </section>
  )
}
