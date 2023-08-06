import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Professor</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Gym Business</h1>

        {/* Hero Section */}
        <section className={styles.hero}>
          <h2>Join the Best Gym in Town!</h2>
          <p>
            Start your journey with us and achieve your fitness goals.
          </p>
          
          {/* Call to Action Form */}
          <form className={styles.ctaForm}>
            <input 
              type="email" 
              placeholder="Enter your email to get started" 
              required 
            />
            <button type="submit">Join Now</button>
          </form>
        </section>
      </main>
    </div>
  );
}
