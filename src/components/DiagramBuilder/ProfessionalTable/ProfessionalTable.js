import React, { useState } from 'react';
import { Table, Button, Tabs, Tab } from 'react-bootstrap';
import Link from 'next/link';
import styles from './ProfessionalTable.module.scss';

const ProfessionalTable = ({ data, rateName, rateCalc }) => {
  const [key, setKey] = useState('live');

  const liveEvents = data.filter(item => item.status === 'LIVE');
  const completedEvents = data.filter(item => item.status === 'COMPLETED');

  const renderTable = (events) => (
    <Table className={styles.table} striped bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Budget</th>
          <th>{rateName}</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {events.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description}</td>
            <td>{item.totalCost}</td>
            <td>{rateCalc(item)}</td>
            <td>
              <Link href={`/events/event-board?eventId=${item.id}`} passHref>
                <Button variant="primary" size="sm">→</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <div className={styles.tableContainer}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="live" title="Live Events">
          {renderTable(liveEvents)}
        </Tab>
        <Tab eventKey="completed" title="Completed Events">
          {renderTable(completedEvents)}
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProfessionalTable;
