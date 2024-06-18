import React, { useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import styles from './task-management.module.scss';

const initialTasks = [
  { id: uuidv4(), name: 'Setup Venue', description: 'Prepare the venue for the event', cost: 500.0, status: 'NOT_STARTED', deadline: '2024-05-01T09:00', priority: 'HIGH', assignee: 'John Doe' },
  { id: uuidv4(), name: 'Arrange Catering', description: 'Organize food and beverages', cost: 300.0, status: 'IN_PROGRESS', deadline: '2024-05-10T12:00', priority: 'MEDIUM', assignee: 'Jane Smith' },
  // Add more tasks as needed
];

const TaskManagement = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    id: '',
    name: '',
    description: '',
    cost: '',
    status: 'NOT_STARTED',
    deadline: '',
    priority: 'LOW',
    assignee: ''
  });

  const handleClose = () => {
    setShow(false);
    setEditMode(false);
    setCurrentTask({ id: '', name: '', description: '', cost: '', status: 'NOT_STARTED', deadline: '', priority: 'LOW', assignee: '' });
  };
  
  const handleShow = () => setShow(true);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentTask({ ...currentTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setTasks(tasks.map(task => (task.id === currentTask.id ? currentTask : task)));
    } else {
      setTasks([...tasks, { ...currentTask, id: uuidv4(), cost: parseFloat(currentTask.cost) }]);
    }
    handleClose();
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
    setEditMode(true);
    handleShow();
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className={styles.taskManagementContainer}>
      <Button variant="primary" onClick={handleShow}>
        Add New Task
      </Button>
      <Table className={styles.tasksTable} striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Cost ($)</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Priority</th>
            <th>Assignee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.cost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              <td>{task.status}</td>
              <td>{new Date(task.deadline).toLocaleString()}</td>
              <td>{task.priority}</td>
              <td>{task.assignee}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(task)}>Edit</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDelete(task.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit Task' : 'Add New Task'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={currentTask.name}
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
                value={currentTask.description}
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
                value={currentTask.cost}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={currentTask.status}
                onChange={handleChange}
                required
              >
                <option value="NOT_STARTED">Not Started</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDeadline">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="datetime-local"
                name="deadline"
                value={currentTask.deadline}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPriority">
              <Form.Label>Priority</Form.Label>
              <Form.Control
                as="select"
                name="priority"
                value={currentTask.priority}
                onChange={handleChange}
                required
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formAssignee">
              <Form.Label>Assignee</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter assignee name"
                name="assignee"
                value={currentTask.assignee}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editMode ? 'Save Changes' : 'Add Task'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TaskManagement;
