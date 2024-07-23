import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="flex items-center flex-col justify-center">
      <motion.h1   whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }}
  drag="x"
  dragConstraints={{ left: -100, right: 100 }} className="text-2xl text-[#00df9a] font-bold cursor-pointer  ">
        About
      </motion.h1>

      {/* TextConatiner */}
      <div className=" mt-10 items-start justify-start align-self inline-block">
        <ul>
          <li className="flex item-start justify-center flex-row gap-4 ml-[120px] pt-5">
            {/* 1 */}
            <h1 className="text-2xl text-[#00df9a] font-bold ">History:</h1>
            <p className="text-xl text-black font-serif">
              "Founded in 1985, Springdale Public School has been dedicated to
              providing quality education and holistic development to students."
            </p>
          </li>

          <li className="flex ml-[120px] flex-row gap-4   pt-5">
            {/* 2 */}
            <h1 className="text-2xl text-[#00df9a] font-bold ">Vision:</h1>
            <p className="text-xl text-black font-serif">
              "To create a learning environment that fosters academic
              excellence, critical thinking, and ethical values."
            </p>
          </li>

          <li className="flex ml-[120px] flex-row gap-4  pt-5">
            {/* 3 */}
            <h1 className="text-2xl text-[#00df9a] font-bold ">Mission:</h1>
            <p className="text-xl text-black font-serif">
              "To empower students with the knowledge, skills, and values needed
              to thrive in a dynamic world."
            </p>
          </li>

          <li className="flex  flex-row gap-4 ml-[120px] pt-5">
            {/* 4*/}
            <h1 className="text-2xl text-[#00df9a] font-bold ">
              Principal's Message:
            </h1>
            <p className="text-xl text-black font-serif">
              "At Springdale, we believe in nurturing the potential of every
              student and guiding them towards a successful future."
            </p>
          </li>


          <li className="flex justify-center flex-row gap-4 ml-[-180px] pt-5">
            <h1 className="text-2xl text-[#00df9a] font-bold ">
              Infrastructure and Facilities:
            </h1>

            <p className="text-xl text-black font-serif">
              "State-of-the-art science and computer labs" 
              <br></br>
               "Spacious and well-equipped classrooms"  
               <br></br>
               "Library with a vast collection of books and digital resources"
               <br></br>
               "Sports facilities including a playground,gymnasium, and swimming pool"

            </p>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
