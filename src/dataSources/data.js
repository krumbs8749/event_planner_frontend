

import { v4 as uuidv4 } from 'uuid';
const initialEvents = [
  {
    id: "0",
    name: "Tech Conference 2024",
    description: "An annual conference focusing on technology trends and innovations.",
    location: "Convention Center, Techville",
    dateTime: "2024-05-20T10:00:00Z",
    owner: {
      id: "owner1",
      name: "John Doe",
      email: "johndoe@example.com"
    },
    totalCost: 15000.00,
    totalSeats: 500,
    totalRegistration: 350,
    status: 'Live'
  },
  {
    id: "1",
    name: "Art & Design Expo",
    description: "A gathering of artists and designers showcasing their work.",
    location: "Art Gallery, Downtown",
    dateTime: "2024-06-15T09:00:00Z",
    owner: {
      id: "owner2",
      name: "Jane Smith",
      email: "janesmith@example.com"
    },
    totalCost: 8000.00,
    totalSeats: 200,
    totalRegistration: 150,
    status: 'Completed'
  },
  {
    id: "2",
    name: "Food Festival",
    description: "Celebrate the culinary arts with delicious food and drinks.",
    location: "City Park",
    dateTime: "2024-07-10T12:00:00Z",
    owner: {
      id: "owner3",
      name: "Mike Johnson",
      email: "mikejohnson@example.com"
    },
    totalCost: 10000.00,
    totalSeats: 300,
    totalRegistration: 250,
    status: 'Live'
  },
  {
    id: "3",
    name: "Fashion Show Extravaganza",
    description: "Experience the latest fashion trends from top designers.",
    location: "Grand Ballroom, Fashion Center",
    dateTime: "2024-08-05T18:00:00Z",
    owner: {
      id: "owner4",
      name: "Emily Brown",
      email: "emilybrown@example.com"
    },
    totalCost: 12000.00,
    totalSeats: 400,
    totalRegistration: 300,
    status: 'Completed'
  },
  {
    id: "4",
    name: "Health & Wellness Expo",
    description: "Discover ways to improve your health and well-being.",
    location: "Community Center, Wellness District",
    dateTime: "2024-09-22T10:00:00Z",
    owner: {
      id: "owner5",
      name: "David Wilson",
      email: "davidwilson@example.com"
    },
    totalCost: 9000.00,
    totalSeats: 250,
    totalRegistration: 200,
    status: 'Live'
  },
  {
    id: "5",
    name: "Music Festival",
    description: "Enjoy live performances from top artists in various genres.",
    location: "Amphitheater, Riverside",
    dateTime: "2024-10-18T15:00:00Z",
    owner: {
      id: "owner6",
      name: "Sarah Lee",
      email: "sarahlee@example.com"
    },
    totalCost: 20000.00,
    totalSeats: 600,
    totalRegistration: 500,
    status: 'Completed'
  },
  {
    id: "6",
    name: "Film & TV Expo",
    description: "Explore the world of cinema and television with industry professionals.",
    location: "Film Studio, Hollywood",
    dateTime: "2024-11-12T11:00:00Z",
    owner: {
      id: "owner7",
      name: "Michael Adams",
      email: "michaeladams@example.com"
    },
    totalCost: 15000.00,
    totalSeats: 350,
    totalRegistration: 300,
    status: 'Live'
  },
  {
    id: "7",
    name: "Sports Summit",
    description: "Discuss the latest developments and challenges in the world of sports.",
    location: "Stadium Conference Center",
    dateTime: "2024-12-08T09:00:00Z",
    owner: {
      id: "owner8",
      name: "Jessica Parker",
      email: "jessicaparker@example.com"
    },
    totalCost: 12000.00,
    totalSeats: 400,
    totalRegistration: 350,
    status: 'Completed'
  },
  {
    id: "8",
    name: "Science Fair",
    description: "Showcase groundbreaking scientific discoveries and experiments.",
    location: "Science Museum",
    dateTime: "2025-01-15T10:00:00Z",
    owner: {
      id: "owner9",
      name: "Andrew Thompson",
      email: "andrewthompson@example.com"
    },
    totalCost: 7000.00,
    totalSeats: 150,
    totalRegistration: 100,
    status: 'Live'
  },
  {
    id: "9",
    name: "Business Symposium",
    description: "Gain insights from industry leaders on the future of business.",
    location: "Business Center, Financial District",
    dateTime: "2025-02-20T08:00:00Z",
    owner: {
      id: "owner10",
      name: "Olivia Garcia",
      email: "oliviagarcia@example.com"
    },
    totalCost: 18000.00,
    totalSeats: 450,
    totalRegistration: 400,
    status: 'Completed'
  },
  {
    id: "10",
    name: "Literature Festival",
    description: "Celebrate literature with readings, workshops, and discussions.",
    location: "Library Auditorium",
    dateTime: "2025-03-18T12:00:00Z",
    owner: {
      id: "owner11",
      name: "Daniel Martinez",
      email: "danielmartinez@example.com"
    },
    totalCost: 6000.00,
    totalSeats: 100,
    totalRegistration: 80,
    status: 'Live'
  },
  {
    id: "11",
    name: "Green Living Expo",
    description: "Learn about sustainable living practices and eco-friendly products.",
    location: "Green Convention Center",
    dateTime: "2025-04-22T09:00:00Z",
    owner: {
      id: "owner12",
      name: "Sophia Brown",
      email: "sophiabrown@example.com"
    },
    totalCost: 8500.00,
    totalSeats: 200,
    totalRegistration: 150,
    status: 'Completed'
  },
  {
    id: "12",
    name: "Culinary Competition",
    description: "Watch top chefs compete in a culinary battle for the title.",
    location: "Culinary Institute",
    dateTime: "2025-05-25T14:00:00Z",
    owner: {
      id: "owner13",
      name: "William Davis",
      email: "williamdavis@example.com"
    },
    totalCost: 10000.00,
    totalSeats: 300,
    totalRegistration: 250,
    status: 'Live'
  },
  {
    id: "13",
    name: "Tech Startup Showcase",
    description: "Discover innovative startups and cutting-edge technologies.",
    location: "Startup Hub, Tech District",
    dateTime: "2025-06-20T11:00:00Z",
    owner: {
      id: "owner14",
      name: "Emma Wilson",
      email: "emmawilson@example.com"
    },
    totalCost: 13000.00,
    totalSeats: 350,
    totalRegistration: 300,
    status: 'Completed'
  },
  {
    id: "14",
    name: "Artisan Craft Fair",
    description: "Browse and purchase unique handmade crafts from local artisans.",
    location: "Community Center, Arts District",
    dateTime: "2025-07-15T10:00:00Z",
    owner: {
      id: "owner15",
      name: "Liam Taylor",
      email: "liamtaylor@example.com"
    },
    totalCost: 7000.00,
    totalSeats: 150,
    totalRegistration: 120,
    status: 'Live'
  }
];

export default initialEvents;

// Function to generate a random email
function generateEmail(name) {
    const domain = 'test.com';
    const randomNumber = Math.floor(Math.random() * 10000);
    return `${name.replace(/\s/g, '').toLowerCase()}${randomNumber}@${domain}`;
}

// Function to generate a random phone number
function generatePhoneNumber() {
    const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    return `+1${randomNumber}`; // Assuming US phone number format
}

// Function to generate mock data for CostSource
function generateMockCostSources() {
  return [
    { id: uuidv4(), name: 'Venue Rental', description: 'Rental of convention center', category: 'Venue', cost: 5000.0 },
    { id: uuidv4(), name: 'Catering', description: 'Food and beverages for attendees', category: 'Food', cost: 3000.0 },
    { id: uuidv4(), name: 'Speaker Fees', description: 'Honorarium for keynote speakers', category: 'Speakers', cost: 2000.0 },
    // Add more mock cost sources as needed
    { id: uuidv4(), name: 'Marketing', description: 'Advertising and promotional materials', category: 'Marketing', cost: 1500.0 },
    { id: uuidv4(), name: 'Equipment Rental', description: 'Rental of audiovisual equipment', category: 'Equipment', cost: 1000.0 }
  ];
}

// Function to generate mock data for Task
function generateMockTasks() {
  return [
    { id: uuidv4(), name: 'Prepare Presentation', description: 'Create slides for presentation', cost: 0.0 },
    { id: uuidv4(), name: 'Coordinate Logistics', description: 'Arrange transportation and accommodation', cost: 0.0 },
    { id: uuidv4(), name: 'Promote Event', description: 'Market the event on social media and other channels', cost: 0.0 },
    // Add more mock tasks as needed
    { id: uuidv4(), name: 'Set Up Venue', description: 'Arrange seating and decorations', cost: 0.0 },
    { id: uuidv4(), name: 'Register Attendees', description: 'Check-in attendees at the registration desk', cost: 0.0 }
  ];
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const statuses = ['Registered', 'Checked-in', 'Cancelled'];
const ticketTypes = ['VIP', 'General Admission', 'Student'];
const companies = ['Company A', 'Company B', 'Company C'];

function generateMockAttendees(numAttendees) {
  const attendees = [];
  for (let i = 0; i < numAttendees; i++) {
    const id = uuidv4();
    const name = `Attendee ${i + 1}`;
    const email = generateEmail(name);
    const phoneNumber = generatePhoneNumber();
    const status = getRandomItem(statuses);
    const registrationDate = new Date(Date.now() - Math.floor(Math.random() * 1e10)).toISOString();
    const ticketType = getRandomItem(ticketTypes);
    const company = getRandomItem(companies);
    const notes = `Notes for ${name}`;

    attendees.push({
      id,
      name,
      email,
      phoneNumber,
      status,
      registrationDate,
      ticketType,
      company,
      notes
    });
  }
  return attendees;
}

// Function to generate mock event data
function generateMockEvents(mockEvents) {
  const events = mockEvents.map((event) => {
    // Generate at least ten attendees for each event
    let attendees = generateMockAttendees(Math.max(10, event.totalRegistration));

    // Generate mock cost sources
    const costs = generateMockCostSources();
    // Calculate the total cost based on the provided costs
    const totalCost = costs.reduce((acc, curr) => acc + curr.cost, 0);

    // Generate mock tasks
    const tasks = generateMockTasks();

    return ({...event, attendees, costs, tasks, totalCost});
  });
  
  return events;
}



// Generate mock event data with attendees, costs, and tasks
const mockEvents = generateMockEvents(initialEvents);

// mock scheduled events
const upcomingSchedules = [
  {
    time: new Date('2024-05-20T10:00:00Z'),
    name: 'Tech Conference 2024',
    status: 'Registration Open',
    statusClass: 'registrationOpen',
    venue: 'Convention Center, Techville',
    participants: [
      { avatar: 'path/to/avatar1.jpg', name: 'John Doe' },
      { avatar: 'path/to/avatar2.jpg', name: 'Jane Smith' },
    ],
  },
  {
    time: new Date('2024-09-22T10:00:00Z'),
    name: 'Health & Wellness Expo',
    status: 'Event Occurring',
    statusClass: 'eventOccurring',
    venue: 'Community Center, Wellness District',
    participants: [
      { avatar: 'path/to/avatar3.jpg', name: 'Alice Johnson' },
      { avatar: 'path/to/avatar4.jpg', name: 'Robert Brown' },
    ],
  },
  {
    time: new Date('2024-07-10T12:00:00Z'),
    name: 'Food Festival',
    status: 'Registration Closed',
    statusClass: 'registrationClosed',
    venue: 'City Park',
    participants: [
      { avatar: 'path/to/avatar5.jpg', name: 'Chris Davis' },
      { avatar: 'path/to/avatar6.jpg', name: 'Patricia Garcia' },
    ],
  },
  {
    time: new Date('2024-06-15T09:00:00Z'),
    name: 'Art & Design Expo',
    status: 'Registration Open',
    statusClass: 'registrationOpen',
    venue: 'Art Gallery, Downtown',
    participants: [
      { avatar: 'path/to/avatar7.jpg', name: 'Michael Scott' },
      { avatar: 'path/to/avatar8.jpg', name: 'Dwight Schrute' },
    ],
  },
  {
    time: new Date('2024-10-18T15:00:00Z'),
    name: 'Music Festival',
    status: 'Event Occurring',
    statusClass: 'eventOccurring',
    venue: 'Amphitheater, Riverside',
    participants: [
      { avatar: 'path/to/avatar9.jpg', name: 'Jim Halpert' },
      { avatar: 'path/to/avatar10.jpg', name: 'Pam Beesly' },
    ],
  },
  {
    time: new Date('2024-11-12T11:00:00Z'),
    name: 'Film & TV Expo',
    status: 'Registration Closed',
    statusClass: 'registrationClosed',
    venue: 'Film Studio, Hollywood',
    participants: [
      { avatar: 'path/to/avatar11.jpg', name: 'Andy Bernard' },
      { avatar: 'path/to/avatar12.jpg', name: 'Stanley Hudson' },
    ],
  },
];

export { mockEvents, upcomingSchedules };
