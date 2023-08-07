// components/NavBar.js
import styles from './NavBar.module.css'; // Create a corresponding CSS module

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                TechFit Gym
            </div>
            <div className={styles.menu}>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}