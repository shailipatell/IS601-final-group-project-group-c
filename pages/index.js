import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';

export default function Home() {
  
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hasUserGivenConsent, setHasUserGivenConsent] = useState(false);
  const [ga4Loaded, setGa4Loaded] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Load the user's consent from local storage.
    const userConsent = localStorage.getItem('userGAConsent');
    if (userConsent === 'true') {
      setHasUserGivenConsent(true);
    }

    // Check if the Google Analytics script has loaded.
    const ga4Script = document.querySelector(`script[src*="${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}"]`);
    if (ga4Script) {
      ga4Script.onload = () => {
        setGa4Loaded(true);
      };
    }

    return () => {
      if (ga4Script) {
        ga4Script.onload = null;
      }
    };
  }, []);

  useEffect(() => {
    if (hasUserGivenConsent && ga4Loaded) {
      logPageView();
    }
  }, [hasUserGivenConsent, ga4Loaded]);

  const handleConsent = () => {
    localStorage.setItem('userGAConsent', 'true');
    setHasUserGivenConsent(true);
  };

  const handleOptOut = () => {
    localStorage.setItem('userGAConsent', 'false');
    setHasUserGivenConsent(false);
  };

  const subscribe = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await response.json();

    if (error) {
      setMessage(`Oops! ${error}`);
      return;
    }

    setEmail('');
    setIsSubscribed(true);
    setMessage('Success! 🎉 You are now subscribed.');
  };

  const unsubscribe = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/unsubscribe', {
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    const { error } = await response.json();

    if (error) {
      setMessage(`Oops! ${error}`);
      return;
    }

    setEmail('');
    setIsSubscribed(false);
    setMessage('You have successfully unsubscribed.');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>TechFit Gym</title>
      </Head>

      <main className={styles.main}>
        <NavBar />
        <p className={styles.tagline}>Unlock Your Fitness Potential with Data-Driven Workouts</p>
        <section className={styles.hero}>
          <h2>Join the Best Gym in Town!</h2>
          <p>Start your journey with us and achieve your fitness goals.</p>

          {!isSubscribed ? (
            <form className={styles.ctaForm} onSubmit={subscribe}>
              <input 
                type="email" 
                placeholder="Enter your email to get started" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div>
                <input type="checkbox" required />
                <label>
                  I consent to receive marketing emails and agree with the 
                  <a href="/privacy"> Privacy Policy</a>.
                </label>
              </div>
              <button type="submit">Join Now</button>
            </form>
          ) : (
            <div>
              <p className={styles.message}>{message}</p>
              <button onClick={unsubscribe}>Unsubscribe</button>
            </div>
          )}

        </section>
        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <p>Empowering individuals to achieve their fitness goals through a data-driven and personalized approach, leveraging advanced technology and expert guidance.</p>
        </section>
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

