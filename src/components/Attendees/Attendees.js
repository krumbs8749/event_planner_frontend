import React, { useState } from 'react';
import { Table, Form, Pagination, Container, Row, Col, Button, Modal } from 'react-bootstrap';
import styles from "./attendees.module.scss";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addOrUpdateAttendee } from '../../../app/api/eventAPI';

const Attendees = ({ eventId, attendees, setAttendees }) => {
  const queryClient = useQueryClient();

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentAttendee, setCurrentAttendee] = useState({
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
    status: '',
    registrationDate: '',
    ticketType: '',
    company: '',
    notes: ''
  });

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

  const handleClose = () => {
    setShow(false);
    setEditMode(false);
    setCurrentAttendee({
      id: '',
      name: '',
      email: '',
      phoneNumber: '',
      status: '',
      registrationDate: '',
      ticketType: '',
      company: '',
      notes: ''
    });
  };

  const mutation = useMutation({
    mutationFn: (newAttendee) => addOrUpdateAttendee(eventId, newAttendee),
    onSuccess: () => {
      queryClient.invalidateQueries(['event/get', eventId]);
      handleClose();
    },
  });

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentAttendee({ ...currentAttendee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const attendeeToSubmit = {
      ...currentAttendee,
      registrationDate: currentAttendee.registrationDate || new Date().toISOString()
    };
    mutation.mutate(attendeeToSubmit);
  };

  const handleEdit = (attendee) => {
    setCurrentAttendee(attendee);
    setEditMode(true);
    handleShow();
  };

  const handleDelete = (id) => {
    setAttendees((prevAttendees) => prevAttendees.filter((attendee) => attendee.id !== id));
  };

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

      <Button variant="primary" onClick={handleShow} className="mb-4">
        Add New Attendee
      </Button>

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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Edit Attendee" : "Add New Attendee"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={currentAttendee.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={currentAttendee.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phoneNumber"
                value={currentAttendee.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter status"
                name="status"
                value={currentAttendee.status}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formTicketType">
              <Form.Label>Ticket Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ticket type"
                name="ticketType"
                value={currentAttendee.ticketType}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company"
                name="company"
                value={currentAttendee.company}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter notes"
                name="notes"
                value={currentAttendee.notes}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              {editMode ? "Save Changes" : "Add Attendee"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Attendees;
