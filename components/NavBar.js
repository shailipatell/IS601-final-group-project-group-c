// components/NavBar.js
import Link from 'next/link';
import styles from './NavBar.module.css'; // Create a corresponding CSS module

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                TechFit Gym
            </div>
            <div className={styles.menu}>
                <a href="home">Home</a>
                <a href="about">About</a>
                <a href="privacy">Privacy Policy</a>
                <a href="contact">Contact</a>
                <a href="blog">Blog</a>
            </div>
        </nav>
    );
}
