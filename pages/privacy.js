// pages/privacy.js

import Head from 'next/head';
import styles from '../styles/Privacy.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TechnoGym - Privacy Policy</title>
        <meta name="description" content="TechnoGym - Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.content}>
          At TechnoGym, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and share your
          personal information when you visit our website or use our services.
        </p>
        <p className={styles.content}>
          We may collect certain information from you, including but not limited to your name, email address, and fitness
          preferences. This information is used to provide you with a personalized experience and to improve our services.
        </p>
        <p className={styles.content}>
          We do not sell or share your personal information with third parties for marketing purposes. Your data is treated
          with the utmost confidentiality and is used solely for the purposes outlined in this Privacy Policy.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} TechnoGym. All rights reserved.</p>
      </footer>
    </div>
  );
}
