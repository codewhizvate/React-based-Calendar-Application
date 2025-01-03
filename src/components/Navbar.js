// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-600 text-white p-4">
//       <ul className="flex space-x-4">
//         <li><a href="/dashboard">Dashboard</a></li>
//         <li><a href="/admin">Admin</a></li>
//         <li><a href="/calendar">Calendar</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-4">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/admin">Admin</a></li>
        <li><a href="/calendar">Calendar</a></li>
        {/* New links for Admin sections */}
        <li><a href="/admin/company-management">Company Management</a></li>
        <li><a href="/admin/communication-method-management">Communication Method Management</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
