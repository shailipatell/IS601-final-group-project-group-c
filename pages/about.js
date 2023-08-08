// pages/about.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar'; // Import the NavBar component

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
      <NavBar />
        <title>TechFit Gym - About</title>
        <meta name="description" content="Technologically focused gym business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      <main className={styles.main}>
        <h1 className={styles.title}>About TechFit Gym</h1>
        <p className={styles.description}>
          TechFit Gym is a technologically focused gym that combines the latest fitness trends with cutting-edge technology.
        </p>
        <p className={styles.description}>
          Our mission is to provide our members with the best fitness experience by leveraging the power of technology to
          enhance workouts, track progress, and offer personalized training programs.
        </p>
        <p className={styles.description}>
          At TechFit Gym, we believe that technology can revolutionize the fitness industry, and we are committed to
          integrating innovative solutions into every aspect of our gym.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} TechFit Gym. All rights reserved.</p>
      </footer>
    </div>
  );
}
