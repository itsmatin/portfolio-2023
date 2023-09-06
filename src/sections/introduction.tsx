import AnimatedText from "@/components/animatedText";
import styles from "@/sections/styles/introduction.module.css";
import { AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

const Introduction = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref, {
    margin: "-40%",
    once: true,
  });

  return (
    <AnimatePresence>
      <section ref={ref} className={styles.container}>
        <AnimatePresence>
          {isVisible && (
            <AnimatedText
              className="heading-2 align-center"
              text="I am an expert in frontend engineering, team management and avoiding Internet Explorer"
            />
          )}
        </AnimatePresence>
      </section>
    </AnimatePresence>
  );
};

export default Introduction;
