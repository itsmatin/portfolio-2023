"use client";
import styles from "./page.module.css";
import Work from "@/sections/work";
import Contact from "@/sections/contact";
import Location from "@/sections/location";
import Heading from "@/sections/heading";
import Introduction from "@/sections/introduction";

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading />
      <Introduction />
      <Location />
      <Work />
      <Contact />
    </main>
  );
}
