import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from "./Components/Registration";


function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default App;




// App.js

// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from "./Components/Home";
// import EmployeeDetails from "./Components/EmployeeDetails";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         {/* Use Route components for each route */}
//         <Route path="/" exact component={Home} />
//         <Route path="/employee/:id" component={EmployeeDetails} />
//       </Router>
//     </div>
//   );
// }

// export default App;

