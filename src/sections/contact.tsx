import { EASING } from "@/constants/animations";
import styles from "@/sections/styles/contact.module.css";
import { motion, useAnimation } from "framer-motion";

const ContactBar = ({ title, url }: { title: string; url: string }) => {
  const controls = useAnimation();

  const hoverHandler = () => {
    controls.start({
      height: 566,
      transition: { ease: EASING, duration: 0.3 },
    });
  };

  const unhoverHandler = () => {
    controls.start({
      height: 0,
      transition: { ease: EASING, duration: 0.3 },
    });
  };
  return (
    <motion.a
      href={url}
      target="_blank"
      className={styles.contactBar}
      onHoverStart={hoverHandler}
      onHoverEnd={unhoverHandler}
      whileHover={{ color: "#000" }}
    >
      <motion.div
        className={styles.barBackground}
        initial={{ height: 0 }}
        animate={controls}
      />
      <h2>{title}</h2>
    </motion.a>
  );
};

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h3>Looking for a new position as of</h3>
        <h3>September 1st, 2023</h3>
      </div>
      <h1>CONTACT</h1>
      <div className={styles.barContainer}>
        <ContactBar title="github" url="https://github.com/itsmatin" />
        <ContactBar title="CV" url="https://github.com/itsmatin" />
        <ContactBar
          title="LinkedIn"
          url="https://www.linkedin.com/in/matinnikookar/"
        />
      </div>
    </section>
  );
};

export default Contact;
