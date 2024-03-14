import React from 'react'
import styles from "./main.module.scss"
import CircleDiagram from '../DiagramBuilder/CircleDiagram/CircleDiagram'
import ProfessionalTable from '../DiagramBuilder/ProfessionalTable/ProfessionalTable';




const Main = ({className, events}) => {
  return (
    <main className={className}>
        <div className={styles.row}>
            <div className={styles.rect_container}>
                <h3>Total Events</h3>
                <p>17</p>
            </div>
            <div className={styles.rect_container}>
                <CircleDiagram title={"Total registration rate"} total={275} completed={200} />
            </div>
            <div className={styles.rect_container}>
              <h3>Average attendace</h3>
               <p>200</p>
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
