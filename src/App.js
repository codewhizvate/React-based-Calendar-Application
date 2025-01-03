// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Dashboard from "./pages/Dashboard.js";
// import Admin from "./pages/Admin";

// let Calendar;
// try {
//   Calendar = require("./pages/Calendar").default;
// } catch (err) {
//   console.warn("Calendar component not found:", err);
// }

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/admin" element={<Admin />} />
//         {/* Dynamically check for Calendar component */}
//         <Route
//           path="/calendar"
//           element={
//             Calendar ? <Calendar /> : <div>Calendar page not found</div>
//           }
//         />
//         {/* Fallback route with large text, custom font, and light blue mixed background */}
//         <Route
//           path="*"
//           element={
//             <div
//               style={{
//                 background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)", // Light blue mixed gradient background
//                 height: "100vh", // Full screen height
//                 display: "flex", // Flexbox for centering content
//                 justifyContent: "center", // Center horizontally
//                 alignItems: "center", // Center vertically
//                 fontSize: "45px",
//                 fontFamily: "'Arial', sans-serif",
//                 fontWeight: "bold",
//                 color: "#fff", // White text color for contrast
//                 textAlign: "center",
//                 padding: "20px",
//               }}
//             >
//               <div
//                 style={{
//                   backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
//                   padding: "30px",
//                   borderRadius: "10px",
//                   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 Welcome to Calendar Application for Communication Tracking
//               </div>
//             </div>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Dashboard from "./pages/Dashboard.js";
// import Admin from "./pages/Admin";

// let Calendar;
// try {
//   Calendar = require("./pages/Calendar").default;
// } catch (err) {
//   console.warn("Calendar component not found:", err);
// }

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/admin" element={<Admin />}>
//           {/* You can add more nested routes here if needed */}
//         </Route>
//         {/* Dynamically check for Calendar component */}
//         <Route
//           path="/calendar"
//           element={
//             Calendar ? <Calendar /> : <div>Calendar page not found</div>
//           }
//         />
//         {/* Fallback route with large text, custom font, and light blue mixed background */}
//         <Route
//           path="*"
//           element={
//             <div
//               style={{
//                 background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)", // Light blue mixed gradient background
//                 height: "100vh", // Full screen height
//                 display: "flex", // Flexbox for centering content
//                 justifyContent: "center", // Center horizontally
//                 alignItems: "center", // Center vertically
//                 fontSize: "45px",
//                 fontFamily: "'Arial', sans-serif",
//                 fontWeight: "bold",
//                 color: "#fff", // White text color for contrast
//                 textAlign: "center",
//                 padding: "20px",
//               }}
//             >
//               <div
//                 style={{
//                   backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
//                   padding: "30px",
//                   borderRadius: "10px",
//                   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 Welcome to Calendar Application for Communication Tracking
//               </div>
//             </div>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard.js";
import Admin from "./pages/Admin";

let Calendar;
try {
  Calendar = require("./pages/Calendar").default;
} catch (err) {
  console.warn("Calendar component not found:", err);
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/*" element={<Admin />} /> {/* Note the wildcard (*) */}
        <Route
          path="/calendar"
          element={
            Calendar ? <Calendar /> : <div>Calendar page not found</div>
          }
        />
        <Route
          path="*"
          element={
            <div
              style={{
                background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "45px",
                fontFamily: "'Arial', sans-serif",
                fontWeight: "bold",
                color: "#fff",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: "30px",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                Welcome to Calendar Application for Communication Tracking
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
