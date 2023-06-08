import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";


import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = () => (

  <Tilt
    tiltMaxAngleX={2}
    tiltMaxAngleY={1}
  className="xs:w-[620px] mt-10 h-auto w-full"
  >
    <motion.div
      variants={fadeIn("bottom", "spring", "", 1)}
      className=" w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div style={{"paddingTop": "56.25%"}} 
        options={{
          max: 10,
          scale: 1,
          speed: 250,
        }}
        className={styles.conatiner}
      >
        <iframe
        className={styles.responsiveIframe}
          src="https://www.youtube.com/embed/1Vm0Xxa13Oc?&autoplay=1&mute=1"
          title="YouTube video player"
        ></iframe>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, vitae.
        Debitis explicabo cumque tempora nam. Earum omnis iure, vitae doloremque
        aut officiis voluptates velit labore, quas animi eaque, consequatur quo!
      </motion.p>

      <div className="mt-5 flex flex-wrap gap-10 justify-center items-center">
        <ServiceCard/>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
