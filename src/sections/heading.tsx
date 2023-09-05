import styles from "@/sections/styles/heading.module.css";
import { motion } from "framer-motion";
const Heading = () => {
  return (
    <section>
      <motion.div className={styles.headingImage} />
      <motion.h3>He is an</motion.h3>
      <motion.h1>Engineer</motion.h1>
      <motion.h3 className={styles.alignRight}>
        (even though he does not LOOK like one)
      </motion.h3>
    </section>
  );
};

export default Heading;
