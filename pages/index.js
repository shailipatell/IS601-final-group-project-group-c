import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TechFit Gym</title>
      </Head>

      <main className={styles.main}>
      <NavBar />
        {/* Tagline */}
        <p className={styles.tagline}>Unlock Your Fitness Potential with Data-Driven Workouts</p>

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

        {/* Brand Mission */}
        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <p>Empowering individuals to achieve their fitness goals through a data-driven and personalized approach, leveraging advanced technology and expert guidance.</p>
        </section>

        {/* Brand Core Values */}
        <section className={styles.values}>
          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Innovation:</strong> Embrace cutting-edge technology to enhance the fitness experience.</li>
            <li><strong>Personalization:</strong> Tailor workout programs to meet individual needs and goals.</li>
            <li><strong>Excellence:</strong> Strive for the highest quality in equipment, training, and customer service.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
