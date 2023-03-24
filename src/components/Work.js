import React from "react";
// intersection observer hook

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

// project images
import proImg1 from "../assets/proImg1.png";
import proImg2 from "../assets/proImg2.png";
import proImg3 from "../assets/proImg3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex1 flex flex-col gap-y-8 mb-10 lg:mb-0 "
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-cyan-400">
                My Latest <br />
                Projects
              </h2>
              <p className="max-w-sm  mb-4 lg:mb-2 ">
              You can find all of my projects on my GitHub profile, where I demonstrate my works in web development, C++ programming, and data structures and algorithms.
              </p>
              <a
                href="https://github.com/gouravs56?tab=repositories" rel="noreferrer"
                target={"_blank"}
              >
                
                <button className="btn btn-sm ">View all projects </button>
              </a>
            </div>
            {/* image 1--------- */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              {/* projects img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={proImg1}
                alt=""
              />
              {/* preTitle */}
              <div className="group-hover:scale-125 transition-all duration-500 z-50 group-hover:bottom-24 absolute -bottom-full left-12">
                <a href="https://smiling-calf-belt.cyclic.app/">
                  <span className="text-gradient">Billing Software</span>
                </a>
              </div>
              {/* Title */}
              <div className="group-hover:scale-125 transition-all duration-700 z-50 group-hover:bottom-14 absolute -bottom-full left-14">
                <a href="https://github.com/gouravs56/pos_cafe">
                  
                  <span className="text-xl text-white">
                    Point Of Sale for a Cafe
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* 2nd col */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex1 flex flex-col gap-y-12 "
          >
            {/* image 2 -----------*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              {/* projects img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={proImg2}
                alt=""
              />
              {/* preTitle */}
              <div className="group-hover:scale-125 transition-all duration-500 z-50 group-hover:bottom-24 absolute -bottom-full left-12">
                <a href="https://expensegs.000webhostapp.com/">
                  <span className="text-gradient">Expense Tracker</span>
                </a>
              </div>
              {/* Title */}
              <div className="group-hover:scale-125 transition-all duration-700 z-50 group-hover:bottom-14 absolute -bottom-full left-14">
                <a href="https://github.com/gouravs56/expense_tracker">
                  
                  <span className="text-xl text-white">
                    Simple web app to track daily expenses
                  </span>
                </a>
              </div>
            </div>
            {/* image 3 -----------*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              {/* projects img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={proImg3}
                alt=""
              />
              {/* preTitle */}
              <div className="group-hover:scale-125 transition-all duration-500 z-50 group-hover:bottom-24 absolute -bottom-full left-12">
                <a href="/#">
                  <span className="text-gradient">School Website</span>
                </a>
              </div>
              {/* Title */}
              <div className="group-hover:scale-125 transition-all duration-700 z-50 group-hover:bottom-14 absolute -bottom-full left-14">
                <a href="/#">
                  
                  <span className="text-xl text-white">
                  Dynamic School Website using html css php
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
