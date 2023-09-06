import AnimatedText from "@/components/animatedText";
import Cover from "@/components/cover";
import styles from "@/sections/styles/heading.module.css";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    y: "150%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const Heading = () => {
  return (
    <section>
      <div className={styles.headingImage}>
        <Cover type="vertical" />
      </div>

      <AnimatedText
        className="heading-3"
        text={"He is an"}
        transition={{ delay: 0.3 }}
      />

      <motion.h1 className={styles.title} variants={variants}>
        Engineer
        <Cover type="horizontal" />
      </motion.h1>

      <AnimatedText
        className={`heading-3 align-right`}
        transition={{ delay: 0.3 }}
        text="(even though he does not LOOK like one)"
      />
    </section>
  );
};

export default Heading;
