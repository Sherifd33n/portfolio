import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};

export default function HeroSection() {
  return (
    <motion.section
      className="hero-section"
      variants={variants}
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="hero-section-content-box" variants={variants}>
        <motion.div className="hero-section-content" variants={variants}>
          <motion.p className="section-label" variants={variants}>
            Hi, I'm Sherif
          </motion.p>
          <motion.h1 className="hero-section-title" variants={variants}>
            <span className="hero-section-title-color" variants={variants}>
              A Front End
            </span>
            <br /> Developer
          </motion.h1>
          <motion.p className="hero-section-desc" variants={variants}>
            Scroll down as you get to know me.
          </motion.p>
        </motion.div>

        <motion.a
          href="#contact"
          className="btn btn-primary"
          variants={variants}
        >
          Get in Touch
        </motion.a>
      </motion.div>
      <motion.div className="hero-section-img" variants={variants}>
        <img src="./img/one.png" alt="" />
      </motion.div>
    </motion.section>
  );
}
