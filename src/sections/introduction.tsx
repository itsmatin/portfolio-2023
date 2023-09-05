import styles from "@/sections/styles/introduction.module.css";

const Introduction = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        I am an expert in frontend engineering, team management and avoiding{" "}
        <del>Internet Explorer</del>
      </h2>
    </section>
  );
};

export default Introduction;
