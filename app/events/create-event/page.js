"use client";

import { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Modal,
} from "react-bootstrap";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import styles from "./CreateEvent.module.scss";
import { createEvent } from "../../api/eventAPI";

const CreateEvent = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: createEvent,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["events/getAll"]);
      setShowModal(true);
      setCreatedEvent(data);
    },
  });

  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    location: "",
    dateTime: "",
    status: "LIVE",
    owner: { name: "", email: "", phoneNumber: "" },
    totalCost: null,
    totalSeats: null,
    totalRegistration: null,
  });
  const [showModal, setShowModal] = useState(false);
  const [createdEvent, setCreatedEvent] = useState(null);

  const handleOwnerChange = (e) => {
    setEventData({
      ...eventData,
      owner: { ...eventData.owner, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate(eventData);
  };

  const handleCreateMore = () => {
    setShowModal(false);
    setEventData({
      name: "",
      description: "",
      location: "",
      dateTime: "",
      status: "LIVE",
      owner: { name: "", email: "", phoneNumber: "" },
      totalCost: null,
      totalSeats: null,
      totalRegistration: null,
    });
  };

  const handleGoToEvent = () => {
    setShowModal(false);
    router.push(`/events/event-board?eventId=${createdEvent.id}`);
  };

  const handleGoHome = () => {
    setShowModal(false);
    router.push("/");
  };

  return (
    <Container className={styles.createEventContainer}>
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className={styles.createEventFormContainer}>
            <Card.Header as="h1" className="text-center">
              Create Event
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit} className={styles.createEventForm}>
                {/* Event Information Section */}
                <div className={`${styles.formSection} eventInfo`}>
                  <h2 className={styles.sectionTitle}>Event Information</h2>
                  <Form.Group controlId="formEventName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      className={styles.formInput}
                      type="text"
                      placeholder="Enter event name"
                      value={eventData.name}
                      onChange={(e) =>
                        setEventData({ ...eventData, name: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="formEventDescription" className="mt-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      className={styles.formTextArea}
                      placeholder="Enter event description"
                      value={eventData.description}
                      onChange={(e) =>
                        setEventData({
                          ...eventData,
                          description: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="formEventLocation" className="mt-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      className={styles.formInput}
                      type="text"
                      placeholder="Enter event location"
                      value={eventData.location}
                      onChange={(e) =>
                        setEventData({ ...eventData, location: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="formEventDateTime" className="mt-3">
                    <Form.Label>Date and Time</Form.Label>
                    <Form.Control
                      className={styles.formInputDateTime}
                      type="datetime-local"
                      value={eventData.dateTime}
                      onChange={(e) =>
                        setEventData({ ...eventData, dateTime: e.target.value })
                      }
                    />
                  </Form.Group>
                </div>

                {/* Owner Information Section */}
                <div className={`${styles.formSection} owner`}>
                  <h2 className={styles.sectionTitle}>Owner Information</h2>
                  <Form.Group controlId="formOwnerName">
                    <Form.Label>Owner Name</Form.Label>
                    <Form.Control
                      className={styles.formInput}
                      type="text"
                      placeholder="Enter owner name"
                      value={eventData.owner.name}
                      name="name"
                      onChange={handleOwnerChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formOwnerEmail" className="mt-3">
                    <Form.Label>Owner Email</Form.Label>
                    <Form.Control
                      className={styles.formInputEmail}
                      type="email"
                      placeholder="Enter owner email"
                      value={eventData.owner.email}
                      name="email"
                      onChange={handleOwnerChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formOwnerPhoneNumber" className="mt-3">
                    <Form.Label>Owner Phone Number</Form.Label>
                    <Form.Control
                      className={styles.formInput}
                      type="text"
                      placeholder="Enter owner phone number"
                      value={eventData.owner.phoneNumber}
                      name="phoneNumber"
                      onChange={handleOwnerChange}
                    />
                  </Form.Group>
                </div>

                {/* Event Details Section */}
                <div className={`${styles.formSection} eventDetails`}>
                  <h2 className={styles.sectionTitle}>Event Details</h2>
                  <Form.Group controlId="formTotalCost">
                    <Form.Label>Total Cost</Form.Label>
                    <Form.Control
                      className={styles.formInputNumber}
                      type="number"
                      placeholder="Enter total cost"
                      value={eventData.totalCost}
                      onChange={(e) =>
                        setEventData({
                          ...eventData,
                          totalCost: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="formTotalSeats" className="mt-3">
                    <Form.Label>Total Seats</Form.Label>
                    <Form.Control
                      className={styles.formInputNumber}
                      type="number"
                      placeholder="Enter total seats"
                      value={eventData.totalSeats}
                      onChange={(e) =>
                        setEventData({
                          ...eventData,
                          totalSeats: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </div>

                <Button
                  className={styles.submitButton}
                  type="submit"
                  disabled={mutation.isLoading}
                >
                  {mutation.isLoading ? "Creating..." : "Create Event"}
                </Button>
                {mutation.isError && (
                  <p className="text-danger mt-3">
                    Error: {mutation.error.message}
                  </p>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Event Created Successfully!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {createdEvent && (
            <Card className={styles.eventBoard}>
              <Card.Header className={styles.header}>
                <Card.Title className={styles.title}>
                  {createdEvent.name}
                </Card.Title>
                <Card.Subtitle className={styles.dateTime}>
                  {new Date(createdEvent.dateTime).toLocaleString()}
                </Card.Subtitle>
              </Card.Header>
              <Card.Body className={styles.body}>
                <Card.Text className={styles.description}>
                  {createdEvent.description}
                </Card.Text>
                <div className={styles.info}>
                  <p>Location: {createdEvent.location}</p>
                  <p>Owner: {createdEvent.owner.name}</p>
                  <p>Total Cost: ${createdEvent.totalCost.toFixed(2)}</p>
                  <p>
                    Seats Available:{" "}
                    {createdEvent.totalSeats - createdEvent.totalRegistration}
                  </p>
                </div>
              </Card.Body>
            </Card>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCreateMore}>
            Create More Event
          </Button>
          <Button variant="primary" onClick={handleGoToEvent}>
            Go to Event
          </Button>
          <Button variant="outline-primary" onClick={handleGoHome}>
            Go Back Home
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CreateEvent;
