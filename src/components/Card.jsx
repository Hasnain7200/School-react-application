import React from 'react'
import Faculty1 from '../assets/Faculty1.png';
import Faculty2 from '../assets/Faculty2.jpg';
import Faculty3 from '../assets/Faculty3.png';
import Faculty4 from '../assets/Facult4.jpeg';
import Faculty5 from '../assets/Faculty5.png';
import Faculty6 from '../assets/Faculty5.png';
import { motion } from 'framer-motion';



const Card = () => {
    return (


        <div className='w-full py-[10rem] px-4 bg-white'>
          <motion.h2
          
            whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }}
  drag="x"
  dragConstraints={{ left: -100, right: 100 }}
           className="my-20 text-5xl text-[#00df9a] font-bold cursor-pointer mt-[50px] text-center">
        Faculty
      </motion.h2>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
              <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-25 mx-auto mt-[-3rem] bg-white' src={Faculty1} alt="/" />
                  <h2 className='text-2xl font-bold text-center py-8'>John Doe</h2>
                  <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'>Principal</p>
                      <p className='py-2 border-b mx-8'>M.ED</p>
                      <p className='py-2 border-b mx-8'> 20 years of experience in educational administration.</p>
                  </div>
                  
              </div>
              <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-25 h-[350px] mx-auto mt-[-3rem] bg-transparent' src={Faculty2} alt="/" />
                  <h2 className='text-2xl font-bold text-center py-8'>Jane Smith</h2>
              
                  <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'>Vice Principal</p>
                      <p className='py-2 border-b mx-8'>M.Sc in Physics</p>
                      <p className='py-2 border-b mx-8'>15 years of teaching experience.</p>
                  </div>
                 
              </div>
              <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-25 h-[350px] mx-auto mt-[-3rem] bg-white' src={Faculty3} alt="/" />
                  <h2 className='text-2xl font-bold text-center py-8'>Michal Brown</h2>
                  <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'>Maths Teacher</p>
                      <p className='py-2 border-b mx-8'>M.Sc in Maths</p>
                      <p className='py-2 border-b mx-8'>8 years of experience</p>
                  </div>
                  
              </div>
              <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-25 h-[350px] mx-auto mt-[-3rem] bg-white' src={Faculty4} alt="/" />
                  <h2 className='text-2xl font-bold text-center py-8'>Emily Johnson</h2>
                  <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'>English Teacher</p>
                      <p className='py-2 border-b mx-8'> M.A. in English</p>
                      <p className='py-2 border-b mx-8'> 10 years of teaching experience.</p>
                  </div>
                 
              </div>
              <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-25 h-[350px] mx-auto mt-[-3rem] bg-white' src={Faculty5} alt="/" />
                  <h2 className='text-2xl font-bold text-center py-8'>Sophia Davis</h2>
                  <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'>Science Teacher</p>
                      <p className='py-2 border-b mx-8'>M.Sc in Chemistry</p>
                      <p className='py-2 border-b mx-8'>12 years of teaching experience</p>
                  </div>
                 
              </div>
              <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-25 h-[350px] mx-auto mt-[-3rem] bg-white' src={Faculty6} alt="/" />
                  <h2 className='text-2xl font-bold text-center py-8'>David Wilson</h2>
                  <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'>Computer Science Teacher</p>
                      <p className='py-2 border-b mx-8'>B.tech in CSE</p>
                      <p className='py-2 border-b mx-8'>5 years of teaching experience</p>
                  </div>
                  
              </div>
          </div>
        </div>
      );
    };


export default Card;
