import React from "react";
import { motion } from "framer-motion";
const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = './src/assets/Form.pdf'; // PDF file path
    link.download = 'Form.pdf'; //  desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


const Admission = () => {
  return (
    <div className="w-full py-16 text-black px-4" id="admission">
      <motion.h2   whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }}
  drag="x"
  dragConstraints={{ left: -100, right: 100 }} className="my-20 text-5xl text-[#00df9a] font-bold cursor-pointer mt-[50px] text-center">
        Admission Process
      </motion.h2>
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-xl font-bold py-2">
            "Admission forms are available for download. Submit the completed
            form along with required documents at the school office."
          </h1>
          <p className="md:text-2xl sm:text-xl font-bold py-2 text-[#00df9a]">Important Dates:</p>
          <ul className="md:text-2xl sm:text-l font-serif">
            <li>"Admission Form Availability: March 1st"</li>
            <li>"Last Date for Submission: March 31st"</li>
            <li>"Entrance Test: April 15th"</li>
            <li>"Announcement of Results: April 30th"</li>
          </ul>

        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-center w-full">
          <p>CLick to Download School Form</p>
            <button onClick={downloadPdf} className= "bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Click Here
            </button>
          </div>
          <p>
            All the documnets mentioned are important for Admission.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admission;
