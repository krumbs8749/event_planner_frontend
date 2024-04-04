"use client";
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './event-board.module.scss';
import { mockEvents } from '../../../src/dataSources/data';

const EventBoard = () => {
    const searchParams = useSearchParams();
    
  const [searchTerm, setSearchTerm] = useState('');
    const eventId = searchParams.get('eventId');
    const [event, setEvent] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const attendeesPerPage = 10; // Change the number of attendees per page as needed

    // Filter attendees based on search term
    const filteredAttendees = event?.attendees.filter((attendee) =>
      attendee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Logic to calculate pagination
    const indexOfLastAttendee = currentPage * attendeesPerPage;
    const indexOfFirstAttendee = indexOfLastAttendee - attendeesPerPage;
    const currentAttendees = filteredAttendees?.slice(indexOfFirstAttendee, indexOfLastAttendee);
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


    // Function to handle page change
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
        <div className={styles.attendeesSection}>
                <h2 className={styles.attendeesTitle}>Attendees List</h2>
                <div className={styles.searchContainer}>
                  <input
                    type="text"
                    placeholder="Search attendees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                  />
                </div>
                <ul className={styles.attendeesList}>
                    {currentAttendees.map((attendee, index) => (
                        <li key={index} className={styles.attendee}>
                            <p>Name: {attendee.name}</p>
                            <p>Email: {attendee.email}</p>
                            <p>Phone: {attendee.phoneNumber}</p>
                        </li>
                    ))}
                </ul>
                {/* Pagination */}
                <div className={styles.pagination}>
                    {Array.from({ length: Math.ceil(filteredAttendees.length / attendeesPerPage) }, (_, i) => (
                        <button key={i} className={`${styles.pageNumber} ${currentPage == i + 1 ? styles.active : ""}`} onClick={() => paginate(i + 1)}>
                            {i + 1}
                        </button>
                    ))}
                </div>
        </div>
      </div>
    );
}

export default EventBoard;
