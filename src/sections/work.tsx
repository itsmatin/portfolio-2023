import { EASING } from "@/constants/animations";
import { DB } from "@/constants/tempDB";
import styles from "@/sections/styles/work.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

const WorkBar = (props: Work) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className={`${styles.workBar}`}
      onClick={() => window.open(props.url)}
      onHoverEnd={() => setHover(false)}
      onHoverStart={() => setHover(true)}
      transition={{ ease: EASING, duration: 0.2 }}
      animate={{
        height: hover ? "100px" : "70px",
        background: hover ? "#fff" : "transparent",
        color: hover ? "#000" : "#fff",
      }}
    >
      <h3>{props.title}</h3>
      <p className="body-2" style={{ textAlign: "right" }}>
        {props.industry} - {props.role}
      </p>

      {/* <motion.img
        transition={{ ease: EASING, duration: 0.2 }}
        animate={{ y: hover ? "-75px" : "40px" }}
        alt={props.title + " - Matin Nikookar"}
        src={props.image}
      /> */}
    </motion.div>
  );
};

const Work = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-100, 20]);

  return (
    <section className={styles.container}>
      <motion.h2 style={{ y }} className={styles.title}>
        SELECTED WORK
      </motion.h2>
      {DB.work.map((item, i) => {
        return <WorkBar {...item} key={i} />;
      })}
    </section>
  );
};

export default Work;
