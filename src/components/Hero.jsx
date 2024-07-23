import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <div className='text-black'>
          <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a]  p-2 md:text-3xl sm:text-6xl text-[] font-bold md:py-6'>
            Welcome to Springdale Public School
            </p>
        
            <div className='flex justify-center items-center'>
              <p className='md:text-xl sm:text-4xl text-xl font-bold py-4'>
                Where we nature young minds for-
              </p>
                            <ReactTyped
              className='md:text-xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['Bright-future','Excellence','Successfull']}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>
            "Unlock your child's potential with our innovative and nurturing educational environment. Enroll today and watch them thrive!"</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black mt-20'>  <a href='#contact'>Contact Us</a></button>
          </div>
        </div>
      );
    };


export default Hero
