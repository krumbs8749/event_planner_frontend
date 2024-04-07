"use client";
import Link from 'next/link';
import styles from './navbar.module.scss';

const Navbar = ({ isOpen, closeButton }) => {
  // Function to check if the link is active
  const isActive = (href) => window.location.pathname === href;

  console.log(isActive('/'))

  return (
      <div className={`${styles.menu} ${isOpen && styles.active}`}>
        <Link href="/" className={isActive('/') ? styles.active : ''} onClick={closeButton}>Home</Link>
        <Link href="/events/create-event" className={isActive('/events/create-event') ? styles.active : ''} onClick={closeButton}>Create Event</Link>
        <span className={styles.closeButton} onClick={closeButton}>X</span>
      </div>
  );
}

export default Navbar;