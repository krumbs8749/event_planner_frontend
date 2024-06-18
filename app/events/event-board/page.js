"use client";
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState, Suspense  } from 'react';
import { mockEvents, upcomingSchedules } from '../../../src/dataSources/data';
import Attendees from '../../../src/components/Attendees/Attendees';
import { CostSource } from '../../../src/components/CostSources/CostSource';
import { FaUsers, FaMoneyBillWave, FaTasks } from 'react-icons/fa';
import { Container, Row, Col, Tab, Nav, Card } from 'react-bootstrap';
import styles from './event-board.module.scss';
import EventTimelineChart from '../../../src/components/DiagramBuilder/EventTimelineChart/EventTimelineChart';
import StatCard from '../../../src/components/DiagramBuilder/StatCard/StatCard';
import EventProgress from '../../../src/components/DiagramBuilder/EventProgress/EventProgress';
import TaskManagement from '../../../src/components/TaskManagement/TaskManagement';

const tabIcons = {
  Attendees: <FaUsers />,
  Costs: <FaMoneyBillWave />,
  Tasks: <FaTasks />
};

const EventBoardContent = () => {
  const searchParams = useSearchParams();
  const [eventId, setEventId] = useState(null);
  const [event, setEvent] = useState(null);
  const [costs, setCosts] = useState([]);
  const [tasks, setTasks] = useState([]);

  

  useEffect(() => {
    const eventIdFromParams = searchParams.get('eventId');
    setEventId(eventIdFromParams);
  }, [searchParams]);
  
  useEffect(() => {
    const fetchEvent = async () => {
      const data = mockEvents.find(event => event.id === eventId);
      console.log(data);
      setEvent(data);
      if (data) {
        setCosts(data.costs);
        setTasks(data.tasks || []);
      }
    };

    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);

  if (!event) {
    return <p>Loading...</p>;
  }

   // Determine the current stage of the event based on its properties
   const getCurrentStage = () => {
    if (new Date(event.dateTime) < new Date()) {
      return 3; // Registration Closed
    } else if (event.totalSeats === event.totalRegistration) {
      return 2; // Sold out
    } else if (event.totalRegistration > 0) {
      return 1; // Open for registration
    } else {
      return 0; // Not ready
    }
  };
  const currentStage = getCurrentStage();

  return (
    <Container className={styles.eventBoardContainer} fluid>
      <Row>
        <Col md={6}>
          <Card className={styles.eventBoard}>
            <Card.Header className={styles.header}>
              <Card.Title className={styles.title}>{event.name}</Card.Title>
              <Card.Subtitle className={styles.dateTime}>{new Date(event.dateTime).toLocaleString()}</Card.Subtitle>
            </Card.Header>
            <Card.Body className={styles.body}>
              <Card.Text className={styles.description}>{event.description}</Card.Text>
              <div className={styles.info}>
                <p>Location: {event.location}</p>
                <p>Owner: {event.owner.name}</p>
                <p>Total Cost: ${event.totalCost.toFixed(2)}</p>
                <p>Seats Available: {event.totalSeats - event.totalRegistration}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={3}>
            <StatCard label="Registration" subtitle="Total ticket sold" value="500" />
            <StatCard label="Schedule" subtitle="Starts in" value="2 Months" />
        </Col>
        <Col sm={6} md={3}>
            <StatCard label="Revenue" subtitle="Income" value="100.4k" />
            <StatCard label="All projects" subtitle="Total cost" value="100.4k" />
        </Col>
      </Row>  
      <Row>
        <Col md={12}>
          <EventProgress currentStage={currentStage}/>
        </Col>
      </Row>
      <Tab.Container defaultActiveKey="attendees">
        <Row>
          <Col>
            <Nav variant="pills" className={`flex-row ${styles.tabs}`}>
              {Object.keys(tabIcons).map(tab => (
                <Nav.Item key={tab}>
                  <Nav.Link eventKey={tab.toLowerCase()} className={`${styles.tab} ${styles[tab.toLowerCase()]}`}>
                    {tabIcons[tab]} {tab}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Content className={styles.tabContent}>
              <Tab.Pane eventKey="attendees">
                <Attendees attendees={event.attendees} />
              </Tab.Pane>
              <Tab.Pane eventKey="costs">
                <CostSource costs={costs} setCosts={setCosts}/>
              </Tab.Pane>
              <Tab.Pane eventKey="tasks">
                <TaskManagement tasks={tasks} setTasks={setTasks} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

const EventBoard = () => {

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <EventBoardContent  />
    </Suspense>
  );
};

export default EventBoard;
