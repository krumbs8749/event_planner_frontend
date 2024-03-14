"use client";
import Link from 'next/link';
import styles from './navbar.module.scss';

const Navbar = ({ className }) => {
  // Function to check if the link is active
  const isActive = (href) => window.location.pathname === href;

  console.log(isActive('/'))

  return (
    <nav className={className}>
      <div className={styles.menu}>
        <Link href="/" className={isActive('/') ? styles.active : ''}>Home</Link>
        <Link href="/events/create-event" className={isActive('/events/create-event') ? styles.active : ''}>Create Event</Link>
        <Link href="/events/event-list" className={isActive('/events/event-list') ? styles.active : ''}>Attendance List</Link>
      </div>
    </nav>
  );
}

export default Navbar;