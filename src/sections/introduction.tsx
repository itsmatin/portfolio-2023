import InView from "@/components/InView";
import AnimatedText from "@/components/animatedText";
import styles from "@/sections/styles/introduction.module.css";
import { useRef } from "react";

const Introduction = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} className={styles.container}>
      <InView containerRef={ref}>
        <AnimatedText
          className="heading-2 align-center"
          text="I am an expert in frontend engineering, team management and avoiding Internet Explorer"
        />
      </InView>
    </section>
  );
};

export default Introduction;
