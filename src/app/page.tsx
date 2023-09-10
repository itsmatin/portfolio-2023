"use client";
import styles from "./page.module.css";
import Work from "@/sections/work";
import Contact from "@/sections/contact";
import Location from "@/sections/location";
import Heading from "@/sections/heading";
import Introduction from "@/sections/introduction";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import { motion } from "framer-motion";

export default function Home() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMount(true);
    }, 2000);
  }, []);

  return mount ? (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className={styles.main}
    >
      <Heading />
      <Introduction />
      <Location />
      <Work />
      <Contact />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexFlow: "row wrap",

          justifyContent: "space-between",
          marginTop: "16px",
          color: "#fff",
        }}
      >
        <small>Matin Nikookar - Portfolio 2023</small>
        <small>
          3D Model: Garden House, Forbidden City, Beijing, China - by Paul Marx
        </small>
      </div>
    </motion.main>
  ) : (
    <Loading />
  );
}
