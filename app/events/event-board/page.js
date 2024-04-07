"use client";
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './event-board.module.scss';
import { mockEvents } from '../../../src/dataSources/data';
import Attendees from '../../../src/components/Attendees/Attendees';


import { FaUsers, FaMoneyBillWave, FaTasks } from 'react-icons/fa';
import { CostSource } from '../../../src/components/CostSources/CostSource';

const tabIcons = {
  Attendees: <FaUsers />,
  Costs: <FaMoneyBillWave />,
  Tasks: <FaTasks />
};


const EventBoard = () => {
    const searchParams = useSearchParams();
    
    const eventId = searchParams.get('eventId');
    const [event, setEvent] = useState(null);

    
    const tabs = ['Attendees', 'Costs', 'Tasks'];
    const [activeTab, setActiveTab] = useState(tabs[0]);
    

    useEffect(() => {
        const fetchEvent = async () => {
            const data = mockEvents.find(event => event.id === eventId);
            console.log(data);
            setEvent(data);
        };

        if (eventId) {
            fetchEvent();
        }
    }, [eventId]);

    if (!event) {
        return <p>Loading...</p>;
    }



    return (
      <div className={styles.eventBoardContainer}>
        <div className={styles.eventBoard}>
            <div className={styles.header}>
                <h1 className={styles.title}>{event.name}</h1>
                <p className={styles.dateTime}>{new Date(event.dateTime).toLocaleString()}</p>
            </div>
            <div className={styles.body}>
                <p className={styles.description}>{event.description}</p>
                <div className={styles.info}>
                    <p>Location: {event.location}</p>
                    <p>Owner: {event.owner.name}</p>
                    <p>Total Cost: ${event.totalCost.toFixed(2)}</p>
                    <p>Seats Available: {event.totalSeats - event.totalRegistration}</p>
                </div>
            </div>
        </div>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tabIcons[tab]} {tab} 
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'Attendees' && (
            <Attendees attendees={event?.attendees}/>
          )}

          {activeTab === 'Costs' && (
            <div>
              <CostSource costs={event?.costs} />
            </div>
          )}

          {activeTab === 'Tasks' && (
            <div>
              {/* Implement or integrate the task list view */}
              <p>Tasks List View</p>
            </div>
          )}
      </div>


      </div>
    );
}

export default EventBoard;
