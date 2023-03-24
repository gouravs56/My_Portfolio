import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import contactlottie from "../assets/data.json";

import Lottie from "react-lottie";

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contactlottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="py-16 mt-28" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h3 className="text-[45px] text-cyan-400 lg:text-[80px] leading-none mb-12 lg:ml-12  items-start">
                Contact me!
              </h3>
              {/* contact lottie */}
              <div className="hidden lg:flex">
                <Lottie options={defaultOptions} height={400} width={450} />
              </div>
            </motion.div>
          </div>

          {/* form */}
          <motion.form
            method="POST"
            action="https://getform.io/f/33fce2fc-2b9d-4296-903c-1168c57930a7" //getform backend link
            target="_blank"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1  border rounded-2xl flex flex-col gap-y-6 pb-24 p-6"
          >
            <input
              type="text"
              name="name"
              required={true}
              className="bg-transparent border-b py-3 outline-none w-full  placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your name"
            />

            <input
              type="email"
              name="email"
              required={true}
              className="bg-transparent border-b py-3 outline-none w-full  placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your email"
            />

            <textarea
              type="textarea"
              name="textarea"
              className="bg-transparent border-b py-12 outline-none w-full  placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
            />
            <button className="btn btn-lg w-[300px] mx-auto">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
