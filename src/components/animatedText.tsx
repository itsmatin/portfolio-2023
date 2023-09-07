import { ComponentProps } from "react";
import { motion } from "framer-motion";
import styles from "@/components/styles/animatedText.module.css";

type AnimatedTextProps<T extends React.ElementType> = {
  children: string;
} & ComponentProps<T>;

const TEXT_EASE = [0.455, 0.03, 0.515, 0.955];
const variants = {
  hidden: {
    y: "200%",
    transition: { ease: TEXT_EASE, duration: 1 },
  },
  visible: {
    y: 0,
    transition: { ease: TEXT_EASE, duration: 1 },
  },
};

const AnimatedText = <T extends React.ElementType>({
  text,
  ...props
}: AnimatedTextProps<T>) => {
  return (
    <div
      className={props?.className ? ` ${props.className}` : ""}
      style={{
        display: "inline-block",
        width: "100%",
        textDecoration: "inherit",
      }}
    >
      {text
        .split(" ")
        .flat()
        .map((item: any, i: number) => {
          return (
            <div key={i} className={styles.textContainer}>
              <motion.span
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                variants={variants}
                {...props}
              >
                {item}{" "}
              </motion.span>
            </div>
          );
        })}
    </div>
  );
};

export default AnimatedText;
