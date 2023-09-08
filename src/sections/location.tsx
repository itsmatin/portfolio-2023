import styles from "@/sections/styles/location.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Model } from "@/components/model";

const Location = () => {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [500, -500]);

  const x2 = useTransform(scrollYProgress, [0, 1], [-800, 0]);
  const x3 = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <div className={styles.container}>
      <motion.h3 className={styles.title}>Based in</motion.h3>
      <motion.h1 style={{ x: x1 }} className={styles.title}>
        Beijing
      </motion.h1>

      <Canvas
        style={{
          height: "100vh",
          width: "calc(100vw + 80px)",
          marginLeft: -80,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-5, 0, 30],
        }}
      >
        <Model />
      </Canvas>
      <motion.h1
        style={{ x: x3 }}
        className={styles.secondTitle + " align-right"}
      >
        北京
      </motion.h1>
      <motion.h3
        style={{ x: x2 }}
        className={styles.secondTitle + " align-right"}
      >
        Open to relocation
      </motion.h3>
    </div>
  );
};

export default Location;
