"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const Page = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexFlow: "row nowrap",
      }}
    >
      <div>
        {[...new Array(5)].map((item, i) => {
          return <h1 key={i}>404</h1>;
        })}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="/">
          <motion.span
            whileHover={{ background: "#d6e5bb", color: "#fff" }}
            className="heading-3"
            style={{
              cursor: "pointer",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "192px",
              height: "192px",
              background: "#fff",
              color: "#000",
              borderRadius: "100%",
            }}
          >
            HOME
          </motion.span>
        </Link>
      </div>
    </div>
  );
};

export default Page;
