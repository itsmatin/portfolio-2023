import styles from "@/components/styles/cover.module.css";
import { motion } from "framer-motion";

export default function Cover({ type }: { type: "horizontal" | "vertical" }) {
  return type === "vertical" ? (
    <motion.div
      className={styles.cover}
      transition={{ ease: [0.17, 0.58, 0.08, 0.9], duration: 0.8, delay: 0.1 }}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
    />
  ) : (
    <motion.div
      className={`${styles.cover} ${styles.coverHorizontal}`}
      transition={{ ease: [0.17, 0.58, 0.08, 0.9], duration: 0.8, delay: 0.1 }}
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
    />
  );
}
