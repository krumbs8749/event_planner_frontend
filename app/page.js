"use client"
import styles from './page.module.scss'
import Main from '../src/components/Main/Main';


import { mockEvents } from '../src/dataSources/data';

export default function Home() {

  return (
   <Main 
          className={styles.main} 
          events={mockEvents}
    />
    
  )
}
