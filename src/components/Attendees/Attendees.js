import React, {useState} from 'react'
import styles from "./attendees.module.scss"

const Attendees = ({attendees}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    
    // Function to handle page change
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Filter attendees based on search term
    const filteredAttendees = attendees.filter((attendee) =>
      attendee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Logic to calculate pagination
    const attendeesPerPage = 10;
    const indexOfLastAttendee = currentPage * attendeesPerPage;
    const indexOfFirstAttendee = indexOfLastAttendee - attendeesPerPage;
    const currentAttendees = filteredAttendees?.slice(indexOfFirstAttendee, indexOfLastAttendee);

  return (
    <div className={styles.attendeesSection}>
        <div className={styles.searchContainer}>
            <input
            type="text"
            placeholder="Search attendees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
            />
            {/* Pagination */}
            <div className={styles.pagination}>
                {Array.from({ length: Math.ceil(filteredAttendees.length / attendeesPerPage) }, (_, i) => (
                    <button key={i} className={`${styles.pageNumber} ${currentPage == i + 1 ? styles.active : ""}`} onClick={() => paginate(i + 1)}>
                        {i + 1}
                    </button>
                ))}
            </div>
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
  )
}

export default Attendees