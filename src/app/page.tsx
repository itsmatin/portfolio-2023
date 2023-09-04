"use client";
import { Model } from "@/components/model";
import styles from "./page.module.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  const canvasRef = useRef(null);

  return (
    <main className={styles.main}>
      <motion.div className={styles.headingImage} />
      <motion.h3>He is an</motion.h3>
      <motion.h1>Engineer</motion.h1>
      <motion.h3 className={styles.alignRight}>
        (even though he does not LOOK like one)
      </motion.h3>
      <section>
        <h2>
          I am an expert in frontend engineering, team management and avoiding{" "}
          <del>Internet Explorer</del>
        </h2>
      </section>
      <div style={{ position: "relative", overflow: "hidden" }}>
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
          ref={canvasRef}
          shadows
          style={{
            position: "absolute",
            zIndex: 12,
            left: 0,
            top: "180px",
            maxHeight: "1000px",
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

        <section style={{ marginTop: "400px" }}>
          <h2>
            I am an expert in frontend engineering, team management and avoiding{" "}
            <del>Internet Explorer</del>
          </h2>
        </section>
      </div>
    </main>
  );
}
