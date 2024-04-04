'use client';
import { Inter } from 'next/font/google'
import './globals.css'


import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Navbar from '../src/components/Navbar/Navbar';
import styles from './layout.module.scss'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.wrapper}>
        
        <div className={styles.topbar} onClick={toggleNavbar}>
          <FiMenu className={styles.burgerMenu} size={24} color="white" />
          <h3>Event Planner</h3>
        </div>
      
         <Navbar isOpen={isOpen} closeButton={toggleNavbar}></Navbar>
          {children}
          
        </main>
      </body>
    </html>
  )
}
