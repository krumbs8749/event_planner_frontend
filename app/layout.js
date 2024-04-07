'use client';
import { Inter } from 'next/font/google'
import './globals.css'


import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaHome, FaPlus } from 'react-icons/fa';
import styles from './layout.module.scss'

import Link from 'next/link';
import Tooltip from '../src/components/Toolitp/Tooltip';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.wrapper}>
        
        <div className={styles.topbar} onClick={toggleNavbar}>
          <div className={styles.menu}>
            <Link href="/">
              <Tooltip text="Home"><FaHome/></Tooltip>
            </Link>
            <Link href="/events/create-event">
              <Tooltip text="Create Event"><FaPlus /></Tooltip>
            </Link>
          </div>
        
          <h3>Event Planner</h3>
        </div>
      
          {children}
          
        </main>
      </body>
    </html>
  )
}
