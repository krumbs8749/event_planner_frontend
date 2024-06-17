import React from 'react';
import styles from "./main.module.scss";
import ProfessionalTable from '../DiagramBuilder/ProfessionalTable//ProfessionalTable';
import RevenueBarChart from '../DiagramBuilder/RevenueBarChart/RevenueBarChart';
import StatCard from '../DiagramBuilder/StatCard/StatCard';
import { ProgressBar, Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import EventTimelineChart from '../DiagramBuilder/EventTimelineChart/EventTimelineChart';
import { upcomingSchedules } from '../../dataSources/data';

Chart.register(ArcElement, Tooltip, Legend);

const Main = ({ className, events }) => {
  const dataSource = {
    labels: ['In progress', 'Completed', 'Pending', 'Cancelled', 'On hold', 'Others'],
    datasets: [{
      data: [30.3, 22.4, 20.7, 10.2, 9.8, 6.3],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
    }],
  };

  return (
    <main className={`${className} ${styles.dashboard}`}>
      <Container fluid>
        <Row className="mb-3">
          <Col sm={6} md={3}>
            <StatCard label="All projects" subtitle="Income (actual)" value="206.4k" />
          </Col>
          <Col sm={6} md={3}>
            <StatCard label="All projects" subtitle="Total ticket sold" value="500" />
          </Col>
          <Col sm={6} md={3}>
            <StatCard label="All projects" subtitle="Total cost" value="100.4k" />
          </Col>
          <Col sm={6} md={3}>
            <StatCard label="Events" subtitle="Total upcoming Events" value="3" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={4}>
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title>Upcoming Schedules</Card.Title>
                  <EventTimelineChart events={upcomingSchedules}/>
                </Card.Body>
              </Card>
            </Col>
          <Col md={8}>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title>List of Events</Card.Title>
                <ProfessionalTable
                  rateName="Attendance Rate"
                  rateCalc={(d) => (d.totalRegistration / d.totalSeats).toFixed(2)}
                  data={events}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={7}>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title>Revenue Current vs Previous</Card.Title>
                <RevenueBarChart />
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title>Events Status Distribution</Card.Title>
                <div style={{ height: '300px', position: 'relative' }}>
                  <Pie data={dataSource} options={{ maintainAspectRatio: false }} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

Main.propTypes = {};

export default Main;
