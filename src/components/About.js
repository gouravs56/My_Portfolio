import React from "react";
// intersection observer hook
import {  useInView } from "react-intersection-observer";

import CountUp from "react-countup";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import resume from "../assets/GouravSahaResume.pdf";

const About = () => {
  
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-0 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat  h-screen  mix-blend-color-hue bg-top lg:h-[540px]"
          ></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 lg:text-[46px] text-cyan-400">About me</h2>
            
            <p className="sm:mb-24">
            Hi there I'm Gourav Saha, a web developer in my third year of studies, eager to begin my career in the industry. I'm passionate about creating clean and responsive websites that deliver a great user experience. I'm constantly learning and staying up-to-date with the latest technologies to hone my skills and offer the best possible solutions
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={6} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Current <br />
                  Semester
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
            {/* button */}
            <div className="flex gap-x-6 items-center">
              <button
                className="btn btn-lg"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>

              {/* download btn */}
              <a href={resume} download="GouravSahaResume.pdf">
                <button className="btn btn-lg">Resume</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
