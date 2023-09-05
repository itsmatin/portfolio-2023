import styles from "@/sections/styles/work.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const WorkBar = () => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className={styles.workBar}
      onHoverEnd={() => setHover(false)}
      onHoverStart={() => {
        setHover(true);
      }}
    >
      <h3>Delysium</h3>
      <p className="body-2">Blockchain - Engineering/Management</p>

      <motion.img
        animate={{ y: hover ? "-75px" : "50px" }}
        alt="delysium"
        src="./test.png"
      />
    </motion.div>
  );
};

const Work = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>FEATURED WORK</h2>

      <WorkBar />
      <WorkBar />
      <WorkBar />
      <WorkBar />
      <WorkBar />
      <WorkBar />
    </section>
  );
};

export default Work;
