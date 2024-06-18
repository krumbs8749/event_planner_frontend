import React, { useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import styles from "./cost-source.module.scss";

export const CostSource = ({ costs, setCosts }) => {
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentCost, setCurrentCost] = useState({
    id: '',
    name: '',
    description: '',
    category: '',
    cost: ''
  });

  const handleClose = () => {
    setShow(false);
    setEditMode(false);
    setCurrentCost({ id: '', name: '', description: '', category: '', cost: '' });
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCost({ ...currentCost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setCosts(prevCosts => prevCosts.map(cost => (cost.id === currentCost.id ? currentCost : cost)));
    } else {
      setCosts(prevCosts => [...prevCosts, { ...currentCost, id: uuidv4(), cost: parseFloat(currentCost.cost) }]);
    }
    handleClose();
  };

  const handleEdit = (cost) => {
    setCurrentCost(cost);
    setEditMode(true);
    handleShow();
  };

  const handleDelete = (id) => {
    setCosts(prevCosts => prevCosts.filter(cost => cost.id !== id));
  };

  return (
    <div className={styles.costsTableContainer}>
      <Button variant="primary" onClick={handleShow}>
        Add New Cost
      </Button>

      <Table className={styles.costsTable} striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Cost ($)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {costs.map(cost => (
            <tr key={cost.id}>
              <td>{cost.name}</td>
              <td>{cost.description}</td>
              <td>{cost.category}</td>
              <td>{cost.cost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(cost)}>Edit</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDelete(cost.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit Cost' : 'Add New Cost'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={currentCost.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                value={currentCost.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                name="category"
                value={currentCost.category}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCost">
              <Form.Label>Cost</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter cost"
                name="cost"
                value={currentCost.cost}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editMode ? 'Save Changes' : 'Add Cost'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
