import React from 'react'
import styles from "./main.module.scss"
import CircleDiagram from '../DiagramBuilder/CircleDiagram/CircleDiagram'
import ProfessionalTable from '../DiagramBuilder/ProfessionalTable/ProfessionalTable';
import RegistrationRateChart from '../DiagramBuilder/RegistrationOverTime/RegistrationRateChart';



const Main = ({className, events}) => {
  return (
    <main className={className}>
        <div className={styles.row}>
            <div className={styles.rect_container}>
              <h3>Total ticket sold</h3>
               <p>200</p>
            </div>
            <div className={styles.rect_container}>
                <h3>New Events</h3>
                <p>17</p>
            </div>
            
            <div className={styles.rect_container}>
             <RegistrationRateChart />
            </div>
        </div>
        <div className={styles.row}>
          <ProfessionalTable 
            title="List of events" 
            rateName="Attendance Rate" 
            rateCalc={(d) => (d.totalRegistration / d.totalSeats).toFixed(2) } 
            data={events}/>
        </div>
    </main>
  )
}

Main.propTypes = {}

export default Main
