// import React, { useState } from 'react';
// import { flushSync } from 'react-dom';


// const Admin = () => {
//   // State to manage companies and communication methods
//   const [companies, setCompanies] = useState([]);
//   const [communicationMethods, setCommunicationMethods] = useState([
//     { name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1, mandatory: true },
//     { name: 'LinkedIn Message', description: 'Send a message on LinkedIn', sequence: 2, mandatory: false },
//     { name: 'Email', description: 'Send an email', sequence: 3, mandatory: false },
//     { name: 'Phone Call', description: 'Call the company', sequence: 4, mandatory: false },
//     { name: 'Other', description: 'Other communication methods', sequence: 5, mandatory: false },
//   ]);

//   // States for form inputs
//   const [companyName, setCompanyName] = useState('');
//   const [companyLocation, setCompanyLocation] = useState('');
//   const [companyLinkedIn, setCompanyLinkedIn] = useState('');
//   const [companyEmails, setCompanyEmails] = useState('');
//   const [companyPhone, setCompanyPhone] = useState('');
//   const [companyComments, setCompanyComments] = useState('');

//   const handleAddCompany = () => {
//     const newCompany = {
//       name: companyName,
//       location: companyLocation,
//       linkedIn: companyLinkedIn,
//       emails: companyEmails.split(','),
//       phone: companyPhone,
//       comments: companyComments,
//     };
//     setCompanies([...companies, newCompany]);
//     // Reset form fields
//     setCompanyName('');
//     setCompanyLocation('');
//     setCompanyLinkedIn('');
//     setCompanyEmails('');
//     setCompanyPhone('');
//     setCompanyComments('');
//   };

//   const handleDeleteCompany = (index) => {
//     const updatedCompanies = companies.filter((_, i) => i !== index);
//     setCompanies(updatedCompanies);
//   };

//   const handleAddCommunicationMethod = (method) => {
//     setCommunicationMethods([...communicationMethods, method]);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-center text-blue-600">Admin Panel</h1>

//       {/* Company Management Section */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold text-gray-700">Company Management</h2>
//         <div className="mt-4">
//           <input
//             type="text"
//             placeholder="Company Name"
//             value={companyName}
//             onChange={(e) => setCompanyName(e.target.value)}
//             className="p-2 mb-2 w-full border rounded-md"
//           />
//           <input
//             type="text"
//             placeholder="Location"
//             value={companyLocation}
//             onChange={(e) => setCompanyLocation(e.target.value)}
//             className="p-2 mb-2 w-full border rounded-md"
//           />
//           <input
//             type="text"
//             placeholder="LinkedIn Profile"
//             value={companyLinkedIn}
//             onChange={(e) => setCompanyLinkedIn(e.target.value)}
//             className="p-2 mb-2 w-full border rounded-md"
//           />
//           <input
//             type="text"
//             placeholder="Emails (comma separated)"
//             value={companyEmails}
//             onChange={(e) => setCompanyEmails(e.target.value)}
//             className="p-2 mb-2 w-full border rounded-md"
//           />
//           <input
//             type="text"
//             placeholder="Phone Numbers"
//             value={companyPhone}
//             onChange={(e) => setCompanyPhone(e.target.value)}
//             className="p-2 mb-2 w-full border rounded-md"
//           />
//           <textarea
//             placeholder="Comments"
//             value={companyComments}
//             onChange={(e) => setCompanyComments(e.target.value)}
//             className="p-2 mb-4 w-full border rounded-md"
//           />
//           <button
//             onClick={handleAddCompany}
//             className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//           >
//             Add Company
//           </button>
//         </div>

//         {/* Company List */}
//         <div className="mt-8">
//           <h3 className="text-xl font-semibold text-gray-700">Company List</h3>
//           <ul className="list-none mt-4">
//             {companies.map((company, index) => (
//               <li key={index} className="border-b p-4">
//                 <strong>{company.name}</strong> - {company.location}
//                 <button
//                   onClick={() => handleDeleteCompany(index)}
//                   className="ml-4 text-red-600 hover:text-red-800"
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Communication Method Management Section */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold text-gray-700">Communication Method Management</h2>
//         <div className="mt-4">
//           <h3 className="text-xl font-semibold">Available Communication Methods</h3>
//           <table className="table-auto w-full mt-4 border-collapse rounded-lg shadow-lg overflow-hidden">
//             <thead>
//               <tr className="bg-blue-600 text-white">
//                 <th className="p-3 text-left">Method</th>
//                 <th className="p-3 text-left">Description</th>
//                 <th className="p-3 text-left">Sequence</th>
//                 <th className="p-3 text-left">Mandatory</th>
//               </tr>
//             </thead>
//             <tbody>
//               {communicationMethods.map((method, index) => (
//                 <tr key={index} className="border-b hover:bg-gray-100">
//                   <td className="p-3">{method.name}</td>
//                   <td className="p-3">{method.description}</td>
//                   <td className="p-3">{method.sequence}</td>
//                   <td className="p-3">{method.mandatory ? 'Yes' : 'No'}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Add New Communication Method */}
//         <div className="mt-8">
//           <button
//             onClick={() =>
//               handleAddCommunicationMethod({
//                 name: 'New Method',
//                 description: 'New method description',
//                 sequence: communicationMethods.length + 1,
//                 mandatory: false,
//               })
//             }
//             className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//           >
//             Add Communication Method
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;






// import React, { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// const CompanyManagement = ({ companies, setCompanies }) => {
//   const [companyName, setCompanyName] = useState('');
//   const [companyLocation, setCompanyLocation] = useState('');
//   const [companyLinkedIn, setCompanyLinkedIn] = useState('');
//   const [companyEmails, setCompanyEmails] = useState('');
//   const [companyPhone, setCompanyPhone] = useState('');
//   const [companyComments, setCompanyComments] = useState('');

//   const handleAddCompany = () => {
//     const newCompany = {
//       name: companyName,
//       location: companyLocation,
//       linkedIn: companyLinkedIn,
//       emails: companyEmails.split(','),
//       phone: companyPhone,
//       comments: companyComments,
//     };
//     setCompanies([...companies, newCompany]);
//     setCompanyName('');
//     setCompanyLocation('');
//     setCompanyLinkedIn('');
//     setCompanyEmails('');
//     setCompanyPhone('');
//     setCompanyComments('');
//   };

//   const handleDeleteCompany = (index) => {
//     const updatedCompanies = companies.filter((_, i) => i !== index);
//     setCompanies(updatedCompanies);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-2xl font-semibold text-gray-700">Company Management</h2>
//       {/* Form for adding a company */}
//       <input
//         type="text"
//         placeholder="Company Name"
//         value={companyName}
//         onChange={(e) => setCompanyName(e.target.value)}
//         className="p-2 mb-2 w-full border rounded-md"
//       />
//       {/* Repeat for other fields... */}
//       <button
//         onClick={handleAddCompany}
//         className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//       >
//         Add Company
//       </button>

//       {/* Company List */}
//       <ul className="mt-4">
//         {companies.map((company, index) => (
//           <li key={index} className="border-b p-4">
//             <strong>{company.name}</strong> - {company.location}
//             <button
//               onClick={() => handleDeleteCompany(index)}
//               className="ml-4 text-red-600 hover:text-red-800"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const CommunicationMethodManagement = ({ communicationMethods, setCommunicationMethods }) => {
//   const handleAddCommunicationMethod = () => {
//     setCommunicationMethods([
//       ...communicationMethods,
//       { name: 'New Method', description: 'New method description', sequence: communicationMethods.length + 1, mandatory: false },
//     ]);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-2xl font-semibold text-gray-700">Communication Method Management</h2>
//       {/* Table for communication methods */}
//       <table className="table-auto w-full mt-4">
//         <thead>
//           <tr className="bg-blue-600 text-white">
//             <th className="p-3 text-left">Method</th>
//             <th className="p-3 text-left">Description</th>
//             <th className="p-3 text-left">Sequence</th>
//             <th className="p-3 text-left">Mandatory</th>
//           </tr>
//         </thead>
//         <tbody>
//           {communicationMethods.map((method, index) => (
//             <tr key={index}>
//               <td className="p-3">{method.name}</td>
//               <td className="p-3">{method.description}</td>
//               <td className="p-3">{method.sequence}</td>
//               <td className="p-3">{method.mandatory ? 'Yes' : 'No'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button
//         onClick={handleAddCommunicationMethod}
//         className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//       >
//         Add Communication Method
//       </button>
//     </div>
//   );
// };

// const Admin = () => {
//   const [companies, setCompanies] = useState([]);
//   const [communicationMethods, setCommunicationMethods] = useState([
//     { name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1, mandatory: true },
//     { name: 'LinkedIn Message', description: 'Send a message on LinkedIn', sequence: 2, mandatory: false },
//     { name: 'Email', description: 'Send an email', sequence: 3, mandatory: false },
//     { name: 'Phone Call', description: 'Call the company', sequence: 4, mandatory: false },
//     { name: 'Other', description: 'Other communication methods', sequence: 5, mandatory: false },
//   ]);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-center text-blue-600">Admin Panel</h1>
//       <nav className="mt-4">
//         <Link to="/admin/company-management" className="mr-4 text-blue-600">Company Management</Link>
//         <Link to="/admin/communication-method-management" className="text-blue-600">Communication Method Management</Link>
//       </nav>

//       <Routes>
//         <Route path="company-management" element={<CompanyManagement companies={companies} setCompanies={setCompanies} />} />
//         <Route path="communication-method-management" element={<CommunicationMethodManagement communicationMethods={communicationMethods} setCommunicationMethods={setCommunicationMethods} />} />
//       </Routes>
//     </div>
//   );
// };

// export default Admin;













import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import CompanyManagement from "./CompanyManagement";
import CommunicationMethodManagement from "./CommunicationMethodManagement";

const Admin = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600">Admin Panel</h1>

      {/* Navigation for subpages */}
      <div className="mt-4 flex gap-4">
        <Link
          to="company-management"
          className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Company Management
        </Link>
        <Link
          to="communication-method-management"
          className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Communication Method Management
        </Link>
      </div>

      {/* Nested Routes */}
      <div className="mt-8">
        <Routes>
          <Route path="company-management" element={<CompanyManagement />} />
          <Route
            path="communication-method-management"
            element={<CommunicationMethodManagement />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
