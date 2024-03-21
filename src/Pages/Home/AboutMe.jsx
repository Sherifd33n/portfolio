import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function AboutMe() {
  return (
    <motion.section
      className="about-section"
      variants={variants}
      animate="animate"
      id="aboutMe"
    >
      <motion.div className="about-section-box" variants={variants}>
        <motion.h1 variants={variants} className="section-title">
          About Me
        </motion.h1>
        <motion.p variants={variants} className="hero-section-desc">
          Hello! I'm Sherif, a Front-End developer with talents in creating
          seamless, friendly website experiences in other to meet users needs
          and solve problems
        </motion.p>
        <motion.p variants={variants} className="hero-section-desc">
          I fell in love with Front-End development few years back and started
          learning and practicing. Through lots of researches, I was able to
          start working on gaining knowledge in other to make mark in the
          technology world.
        </motion.p>
        <motion.p variants={variants} className="hero-section-desc">
          I love and enjoy Front-End development, working with some Front-End
          technologies like HTML, CSS and JavaScript.
        </motion.p>
        <motion.p variants={variants} className="hero-section-desc">
          I started learning ReactJs(a JavaScript library) about a year ago. I
          am currently a React Front-End Developer.
        </motion.p>

        <motion.p variants={variants} className="hero-section-desc">
          I have other hobbies apart from coding which includes listening to
          musics, reading, video games, watching movies and more.{" "}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
