import React from 'react';

const EmployeeDetails = ({ employee }) => {
  return (
    <div>
      
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="fw-bold">ID</td>
            <td>{employee.id}</td>
          </tr>
          <tr>
            <td className="fw-bold">Name</td>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <td className="fw-bold">Position</td>
            <td>{employee.position}</td>
          </tr>
          <tr>
            <td className="fw-bold">Department</td>
            <td>{employee.department}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;



// EmployeeDetails.js

// import React from 'react';
// import { Link } from 'react-router-dom';

// const EmployeeDetails = ({ employee }) => {
//   return (
//     <div>
//       <h2>Employee Details</h2>
//       <table className="table table-bordered">
//         <tbody>
//           <tr>
//             <td className="fw-bold">ID</td>
//             {/* Use Link to navigate to the employee details page */}
//             <td><Link to={`/employee/${employee.id}`}>{employee.id}</Link></td>
//           </tr>
//           <tr>
//             <td className="fw-bold">Name</td>
//             <td>{employee.name}</td>
//           </tr>
//           <tr>
//             <td className="fw-bold">Position</td>
//             <td>{employee.position}</td>
//           </tr>
//           <tr>
//             <td className="fw-bold">Department</td>
//             <td>{employee.department}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeDetails;
