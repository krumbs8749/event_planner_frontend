"use client"
import styles from './page.module.scss'
import Navbar from '../src/components/Navbar/Navbar';
import Main from '../src/components/Main/Main';


import { mockEvents } from '../src/dataSources/data';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Navbar className={styles.navbar}></Navbar>
      <Main 
        className={styles.main} 
        events={mockEvents}
      />
      
    </main>
  )
}
