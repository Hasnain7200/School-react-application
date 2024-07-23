import React from 'react'
import { motion } from 'framer-motion'

const Conatct = () => {
  return (
    <div className='border-b border-neutral-900 pb-20' id='contact'>
    <motion.h1 
    whileInView={{opacity:1 ,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:0.5}}
    className='my-10 text-center text-4xl text-[#00fd9a]'>Get in Touch</motion.h1>
      <div className='text-center tracking-tighter'>
<motion.p 
whileInView={{opacity:1,x:0}}
initial={{opacity:0,x:-100}}
transition={{duration:1}}
className='my-4'>Address: "Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code"</motion.p>
<motion.p
whileInView={{opacity:1,x:0}}
initial={{opacity:0,x:100}}
transition={{duration:1}}
 className='my-4'>Phone: "+1 (123) 456-7890"</motion.p>
<a href='#info@springdale.edu' className='border-b'> "info@springdale.edu"</a>

      </div>
    </div>
  )
}

export default Conatct
