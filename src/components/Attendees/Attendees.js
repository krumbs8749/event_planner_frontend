import React, { useState } from 'react';
import { Table, Form, Pagination, Container, Row, Col } from 'react-bootstrap';
import styles from "./attendees.module.scss";

const Attendees = ({ attendees }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter attendees based on search term
  const filteredAttendees = attendees.filter((attendee) =>
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.phoneNumber.includes(searchTerm) ||
    attendee.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.ticketType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (attendee.company && attendee.company.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Logic to calculate pagination
  const attendeesPerPage = 10;
  const indexOfLastAttendee = currentPage * attendeesPerPage;
  const indexOfFirstAttendee = indexOfLastAttendee - attendeesPerPage;
  const currentAttendees = filteredAttendees.slice(indexOfFirstAttendee, indexOfLastAttendee);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className={styles.attendeesSection}>
      <Row className="mb-4">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search attendees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </Col>
      </Row>

      <div className={styles.attendeesTableContainer}>
        <Table striped bordered hover responsive className={styles.attendeesTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Registration Date</th>
              <th>Ticket Type</th>
              <th>Company</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {currentAttendees.map((attendee, index) => (
              <tr key={index}>
                <td>{attendee.name}</td>
                <td>{attendee.email}</td>
                <td>{attendee.phoneNumber}</td>
                <td>{attendee.status}</td>
                <td>{new Date(attendee.registrationDate).toLocaleString()}</td>
                <td>{attendee.ticketType}</td>
                <td>{attendee.company}</td>
                <td>{attendee.notes}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Pagination className={styles.pagination}>
        {Array.from({ length: Math.ceil(filteredAttendees.length / attendeesPerPage) }, (_, i) => (
          <Pagination.Item key={i} active={currentPage === i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default Attendees;
