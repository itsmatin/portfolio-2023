import InView from "@/components/InView";
import AnimatedText from "@/components/animatedText";
import { EASING } from "@/constants/animations";
import styles from "@/sections/styles/contact.module.css";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ContactBar = ({ title, url }: { title: string; url: string }) => {
  const controls = useAnimation();

  const hoverHandler = () => {
    controls.start({
      height: 566,
      transition: { ease: EASING, duration: 0.3 },
    });
  };

  const unhoverHandler = () => {
    controls.start({
      height: 0,
      transition: { ease: EASING, duration: 0.3 },
    });
  };
  return (
    <motion.a
      href={url}
      target="_blank"
      className={styles.contactBar}
      onHoverStart={hoverHandler}
      onHoverEnd={unhoverHandler}
      whileHover={{ color: "#000" }}
    >
      <motion.div
        className={styles.barBackground}
        initial={{ height: 0 }}
        animate={controls}
      />
      <h2>{title}</h2>
    </motion.a>
  );
};

const Contact = () => {
  const titleContainer = useRef(null);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [500, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-100, 200]);

  return (
    <section className={styles.container}>
      <motion.div
        style={{ x: x2 }}
        ref={titleContainer}
        className={styles.titleContainer}
      >
        <InView containerRef={titleContainer}>
          <AnimatedText
            className="heading-3"
            text="Looking for a new position as of"
          />
          <AnimatedText className="heading-3" text="September 1st, 2023" />
        </InView>
      </motion.div>
      <motion.h1 transition={{ type: "keyframes" }} style={{ x }}>
        CONTACT
      </motion.h1>
      <div className={styles.barContainer}>
        <ContactBar title="github" url="https://github.com/itsmatin" />
        <ContactBar title="CV" url="https://github.com/itsmatin" />
        <ContactBar
          title="LinkedIn"
          url="https://www.linkedin.com/in/matinnikookar/"
        />
      </div>
    </section>
  );
};

export default Contact;
