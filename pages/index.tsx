import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>expe.sh</p>
      <div className={styles.links}>
        <a href="https://github.com/expesh">github</a>
        <a href="https://freq.expe.sh">freq</a>
      </div>
    </div>
  );
};

export default Home;
