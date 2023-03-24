import React from "react";
import { TypeAnimation } from "react-type-animation";

import Lottie from "react-lottie";
import gif from "../assets/bannerDP.json";


import { FaGithub, FaLinkedin } from "react-icons/fa"; //icons
import {  motion } from "framer-motion";
import { fadeIn } from "../variants"; //variants
import { HiOutlineMail } from "react-icons/hi";

const Banner = () => {

  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: gif,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section
      className=" min-h-[75vh] lg:min-h-[69vh] flex items-center "
      id="home" //this height decides a sections height
    >
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-12 lg:flex-row lg:items-center lg:gap-x-12 ">
          {/* text */}
          <div className="flex-1 text-center font-secondary  lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)} //0.3 is here delay
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} //0.7 indicates that at least 70% of the element must be visible in the viewport before the observer will trigger
              className="h3 fw-bold text-[37px] leading-[0.8]  lg:text-[70px] mb-4 "
            >
              GOURAV <span>SAHA</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[28px] text-cyan-400  lg:text-[36px] font-secondary font-semibold uppercase leading-1 "
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Web Devloper",
                  2000,
                  "MERN Stack Devloper",
                  2000,
                  "C++ Prpgrammer",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[16px] mb-8 max-w-lg mx-auto lg:mx-0 " >
             Hello, I'm a CSE undergrad and aspiring web developer with a fine foundation in C++ programming and data structures and algorithms. I enjoy coding and developing clean responsive websites that offer a great user experience, leveraging my diverse skill set.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 "
            >
              <button
                className="btn btn-lg"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>
              <a href="/#" className="text-gradient btn-link" target={"_blank"}>
                My Portfolio
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[26px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              {/* max-w-max : it makes an element's width expand to fill the maximum width available to it */}
              <a href="https://github.com/gouravs56" target={"_blank"} rel="noreferrer">
                <FaGithub className="hover:scale-125" />
              </a>
              <a
                href="https://www.linkedin.com/in/gourav-saha-a3b025214/"
                target={"_blank"} rel="noreferrer"
              >
                <FaLinkedin className="hover:scale-125" />
              </a>
              <a href="mailto:gourvsaha445566@gmail.com">
                <HiOutlineMail className="hover:scale-125" />
              </a>
            </motion.div>
          </div>

          {/* images */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[290px] lg:max-w-[500px] "
          >
            <Lottie
              options={defaultOptions}
              height={440}
              width={400}
            />

            {/* <img src={Image} alt="home image" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
