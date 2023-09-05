import styles from "@/sections/styles/location.module.css";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Model } from "@/components/model";

const Location = () => {
  return (
    <div className={styles.container}>
      <motion.h3>Based in</motion.h3>
      <motion.h1 style={{ zIndex: 10 }}>Beijing</motion.h1>
      <motion.h1
        className={styles.alignRight}
        style={{ zIndex: 13, position: "relative", marginTop: "64px" }}
      >
        北京
      </motion.h1>
      <motion.h3 className={styles.alignRight}>Open to relocation</motion.h3>

      <Canvas
        className={styles.canvas}
        style={{
          position: "absolute",
          zIndex: 12,
          left: 0,
          top: 180,
          maxHeight: 1000,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-5, 0, 20],
        }}
      >
        <Model />
      </Canvas>
    </div>
  );
};

export default Location;
