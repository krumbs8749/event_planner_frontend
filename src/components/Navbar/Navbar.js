"use client";
import Link from 'next/link';
import styles from './navbar.module.scss';

import { useRouter } from 'next/navigation';

const Navbar = ({ isOpen, closeButton }) => {
  // Function to check if the link is active
  const router = useRouter();

  // Function to check if the link is active
  const isActive = (href) => router.pathname === href;

  return (
      <div className={`${styles.menu} ${isOpen && styles.active}`}>
        <Link href="/" className={isActive('/') ? styles.active : ''} onClick={closeButton}>Home</Link>
        <Link href="/events/create-event" className={isActive('/events/create-event') ? styles.active : ''} onClick={closeButton}>Create Event</Link>
        <span className={styles.closeButton} onClick={closeButton}>X</span>
      </div>
  );
}

export default Navbar;