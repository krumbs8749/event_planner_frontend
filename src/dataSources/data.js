

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
  }
];
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
// Function to generate mock event data
function generateMockEvents(mockEvents) {
  const events = mockEvents.map((event) => {
    const attendees = generateMockAttendees(event.totalRegistration); // Generate attendees for the event
    return ({...event, attendees});
  })
  
  return events;
}


// Function to generate mock attendees
function generateMockAttendees(numAttendees) {
  const attendees = [];
  for (let i = 0; i < numAttendees; i++) {
      const id = uuidv4();
      const name = `Attendee ${i + 1}`;
      const email = generateEmail(name);
      const phoneNumber = generatePhoneNumber();

      attendees.push({ id, name, email, phoneNumber });
  }
  return attendees;
}

const mockEvents = generateMockEvents(initialEvents);


export { mockEvents}

