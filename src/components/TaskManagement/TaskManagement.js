import React, { useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import styles from './task-management.module.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addOrUpdateTask } from '../../../app/api/eventAPI';


const TaskManagement = ({eventId, tasks}) => {
  const queryClient = useQueryClient();

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

  const mutation = useMutation({
    mutationFn: (newTask) => addOrUpdateTask(eventId, newTask),
    onSuccess: () => {
      queryClient.invalidateQueries(["event/get", eventId])
    }
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
    mutation.mutate(currentTask)
    handleClose();
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
    setEditMode(true);
    handleShow();
  };

  const handleDelete = (id) => {
    console.log("To be implemented")
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
