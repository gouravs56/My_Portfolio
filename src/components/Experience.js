import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

// logos
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import mongodb from "../assets/mongodbTr.png";
import cpp from "../assets/cpp.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import express from "../assets/express.png";

const Experience = () => {
  const techStack = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },

    {
      id: 5,
      src: node,
      title: "Node Js",
      style: "shadow-lime-600",
    },
    {
      id: 6,
      src: express,
      title: "Express Js",
      style: "shadow-gray-200",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: mongodb,
      title: "Mongo DB",
      style: "shadow-lime-500",
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="max-w-screen-lg lg:mt-10 mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="h2 text-cyan-400 font-bold border-b-4 border-cyan-800 p-2 inline">
            Tech Stack
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techStack.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className={`shadow-md lg:hover:scale-150 duration-500 py-2  rounded-[999px] ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
