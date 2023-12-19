// Home.js
import React from 'react';
import EmployeeDetails from './EmployeeDetails';

function Home() {
  // Example employee data with multiple employees
  const employees = [
    {
      id: 1,
      name: 'Moni',
      position: 'HR Executive',
      email: 'moni04@example.com',
      department: 'HR',
    },
    {
      id: 2,
      name: 'Priya',
      position: 'Software Engineer',
      email: 'priya03@example.com',
      department: 'IT',
    },
    {
      id: 3,
      name: 'Ram',
      position: 'UX Designer',
      email: 'ram16@example.com',
      department: 'Design',
    },
    {
      id: 4,
      name: 'Rakii',
      position: 'Project Manager',
      email: 'rakii03@example.com',
      department: 'Management',
    },
    // Add more employees as needed
  ];

  return (
    <>
    <h2>Employee Details</h2>
      {employees.map((employee) => (
        <EmployeeDetails key={employee.id} employee={employee} />
      ))}
    </>
  );
}

export default Home;
