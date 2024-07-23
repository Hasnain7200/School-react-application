import React from "react";
import { FACULTY } from "..";
import { motion } from "framer-motion";

const Faculty = () => {
  return (
    <div className=""
    id="gallery">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className="my-20 text-2xl text-[#00df9a] font-bold cursor-pointer mt-[50px] text-center"
      >
        Gallery
      </motion.h1>

      <div>
        {FACULTY.map((faculty, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  width={150}
                  height={150}
                  className="mb-6 rounded"
                ></img>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{faculty.name}</h6>
                <p className="mb-4 text-neutral-500">{faculty.description}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faculty;
