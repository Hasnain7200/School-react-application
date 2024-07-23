import React from "react";
import { ACADEMICS } from "..";
import { motion } from "framer-motion";

const Academics = () => {
  return (
    <div
    id="Academics"
     className="">
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className="my-20 text-2xl text-[#00df9a] font-bold cursor-pointer mt-[50px] text-center"
      >
        Academics
      </motion.h2>

      <div>
        {ACADEMICS.map((Academics, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
              <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:1}}
               className="w-full lg:w-1/4">
                <p className="mb-2 text-neutral-500 text-sm">
                  {Academics.year}
                </p>
              </motion.div>

              <motion.div
                   whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1}}
               className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold text-black">
                  {Academics.role}-<span>{Academics.subjects}</span>
                </h6>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Academics;
