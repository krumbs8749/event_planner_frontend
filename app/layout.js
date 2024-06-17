'use client';
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './layout.module.scss'

import { FaHome, FaPlus } from 'react-icons/fa';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Tooltip from '../src/components/Tooltip/Tooltip';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isEventBoard = pathname.includes("event-board");

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.wrapper}>
        
        <div className={styles.topbar}>
          <div className={styles.menu}>
            <Link href="/">
              <Tooltip text="Home"><FaHome /></Tooltip>
            </Link>
            <Link href="/events/create-event">
              <Tooltip text="Create Event"><FaPlus /></Tooltip>
            </Link>
            {isEventBoard && (
              <div className={styles.eventIndicator}>
                Event Dashboard
              </div>
            )}
          </div>
          <h3>Event Planner</h3>
        </div>
      
        {children}
          
        </main>
      </body>
    </html>
  )
}
