// import React, { useState, useEffect } from 'react';

// // Sample data for companies (you can replace this with actual data from your backend)
// const companies = [
//   { name: 'Company A', lastCommunications: ['LinkedIn Post - 5th Sept', 'Email - 1st Oct'], nextCommunication: 'LinkedIn Post - 15th Oct', overdue: false },
//   { name: 'Company B', lastCommunications: ['Phone Call - 10th Sept', 'Email - 12th Sept'], nextCommunication: 'Phone Call - 25th Oct', overdue: true },
//   { name: 'Company C', lastCommunications: ['LinkedIn Message - 1st Oct', 'Email - 3rd Oct'], nextCommunication: 'Email - 10th Oct', overdue: false },
// ];

// const Dashboard = () => {
//   const [overdueCount, setOverdueCount] = useState(0);
//   const [dueTodayCount, setDueTodayCount] = useState(0);

//   useEffect(() => {
//     // Calculate overdue and due today communications
//     let overdue = 0;
//     let dueToday = 0;

//     companies.forEach(company => {
//       if (company.overdue) {
//         overdue++;
//       }
//       // Assuming 'due today' is determined based on some date logic, which you can implement
//       if (company.nextCommunication.includes('10th Oct')) {
//         dueToday++;
//       }
//     });

//     setOverdueCount(overdue);
//     setDueTodayCount(dueToday);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header Section */}
//       <header className="bg-blue-600 text-white p-4">
//         <h1 className="text-3xl font-bold text-center">User Dashboard</h1>
//       </header>

//       {/* Main Content Section */}
//       <div className="flex">
//         {/* Sidebar Section */}
//         <div className="w-1/4 bg-blue-700 text-white p-4">
//           <h2 className="text-xl font-semibold">Menu</h2>
//           <ul>
//             <li className="mt-4">Dashboard</li>
//             <li className="mt-4">Courses</li>
//             <li className="mt-4">Assignments</li>
//             <li className="mt-4">Reports</li>
//             <li className="mt-4">Settings</li>
//           </ul>
//         </div>

//         {/* Notifications and Company Table Section */}
//         <div className="w-3/4 p-6">
//           {/* Notifications Section */}
//           <div className="notifications mb-8">
//             <h2 className="text-2xl font-semibold text-gray-700">Notifications</h2>
//             <div className="notification-item bg-red-100 p-4 my-2 rounded-lg shadow-sm">
//               <strong className="text-red-600">Overdue Communications:</strong> {overdueCount} overdue tasks.
//             </div>
//             <div className="notification-item bg-yellow-100 p-4 my-2 rounded-lg shadow-sm">
//               <strong className="text-yellow-600">Today's Communications:</strong> {dueTodayCount} tasks due today.
//             </div>
//           </div>

//           {/* Company Grid Section */}
//           <div className="company-grid">
//             <h2 className="text-2xl font-semibold text-gray-700 mb-4">Companies</h2>
//             <table className="table-auto w-full border-collapse rounded-lg shadow-lg overflow-hidden">
//               <thead>
//                 <tr className="bg-blue-600 text-white">
//                   <th className="p-3 text-left">Company Name</th>
//                   <th className="p-3 text-left">Last Communications</th>
//                   <th className="p-3 text-left">Next Scheduled Communication</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {companies.map((company, index) => (
//                   <tr
//                     key={index}
//                     className={`border-b ${company.overdue ? 'bg-red-100' : 'bg-white'} hover:bg-gray-100 transition-all duration-300`}
//                   >
//                     <td className="p-3">{company.name}</td>
//                     <td className="p-3">{company.lastCommunications.join(', ')}</td>
//                     <td className="p-3">{company.nextCommunication}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer className="bg-blue-600 text-white p-4 text-center">
//         <p>&copy; 2024 Your Company. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState, useEffect } from "react";
// import { Tooltip } from "react-tooltip";

// // Sample data for companies
// const companies = [
//   {
//     name: "Company A",
//     lastCommunications: [
//       { type: "LinkedIn Post", date: "5th Sept", notes: "Promotional post" },
//       { type: "Email", date: "1st Oct", notes: "Follow-up email" },
//     ],
//     nextCommunication: "LinkedIn Post - 15th Oct",
//     overdue: false,
//   },
//   {
//     name: "Company B",
//     lastCommunications: [
//       { type: "Phone Call", date: "10th Sept", notes: "Client feedback" },
//       { type: "Email", date: "12th Sept", notes: "Proposal discussion" },
//     ],
//     nextCommunication: "Phone Call - 25th Oct",
//     overdue: true,
//   },
//   {
//     name: "Company C",
//     lastCommunications: [
//       { type: "LinkedIn Message", date: "1st Oct", notes: "Initial outreach" },
//       { type: "Email", date: "3rd Oct", notes: "Follow-up" },
//     ],
//     nextCommunication: "Email - 10th Oct",
//     overdue: false,
//   },
// ];

// const Dashboard = () => {
//   const [selectedCompanies, setSelectedCompanies] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const toggleSelection = (companyName) => {
//     setSelectedCompanies((prev) =>
//       prev.includes(companyName)
//         ? prev.filter((name) => name !== companyName)
//         : [...prev, companyName]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header Section */}
//       <header className="bg-blue-600 text-white p-4">
//         <h1 className="text-3xl font-bold text-center">User Dashboard</h1>
//       </header>

//       <div className="p-6">
//         {/* Company Grid Section */}
//         <div className="company-grid">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4">Companies</h2>
//           <table className="table-auto w-full border-collapse rounded-lg shadow-lg">
//             <thead>
//               <tr className="bg-blue-600 text-white">
//                 <th className="p-3 text-left">Select</th>
//                 <th className="p-3 text-left">Company Name</th>
//                 <th className="p-3 text-left">Last Communications</th>
//                 <th className="p-3 text-left">Next Scheduled Communication</th>
//               </tr>
//             </thead>
//             <tbody>
//               {companies.map((company, index) => (
//                 <tr
//                   key={index}
//                   className={`border-b ${
//                     company.overdue ? "bg-red-100" : "bg-white"
//                   } hover:bg-gray-100 transition-all duration-300`}
//                 >
//                   <td className="p-3">
//                     <input
//                       type="checkbox"
//                       onChange={() => toggleSelection(company.name)}
//                       checked={selectedCompanies.includes(company.name)}
//                     />
//                   </td>
//                   <td className="p-3">{company.name}</td>
//                   <td className="p-3">
//                     {company.lastCommunications.map((comm, idx) => (
//                       <div
//                         key={idx}
//                         data-tooltip-id={`tooltip-${index}-${idx}`}
//                         data-tooltip-content={comm.notes}
//                         className="cursor-pointer"
//                       >
//                         {comm.type} - {comm.date}
//                       </div>
//                     ))}
//                   </td>
//                   <td className="p-3">{company.nextCommunication}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Communication Performed Button */}
//         <button
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
//           onClick={() => setShowModal(true)}
//           disabled={selectedCompanies.length === 0}
//         >
//           Communication Performed
//         </button>

//         {/* Modal */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//               <h2 className="text-xl font-bold mb-4">Log Communication</h2>
//               <form>
//                 <label className="block mb-2">
//                   Type of Communication:
//                   <select className="block w-full p-2 border rounded">
//                     <option>LinkedIn Post</option>
//                     <option>Email</option>
//                     <option>Phone Call</option>
//                   </select>
//                 </label>
//                 <label className="block mb-2">
//                   Date of Communication:
//                   <input
//                     type="date"
//                     className="block w-full p-2 border rounded"
//                   />
//                 </label>
//                 <label className="block mb-2">
//                   Notes:
//                   <textarea
//                     className="block w-full p-2 border rounded"
//                     rows="3"
//                   ></textarea>
//                 </label>
//                 <div className="flex justify-end">
//                   <button
//                     type="button"
//                     className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;











import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

const companies = [
  {
    name: "Company A",
    lastCommunications: [
      { type: "LinkedIn Post", date: "5th Sept", notes: "Promotional post" },
      { type: "Email", date: "1st Oct", notes: "Follow-up email" },
    ],
    nextCommunication: "LinkedIn Post - 15th Oct",
    overdue: false,
    highlightDisabled: false,
  },
  {
    name: "Company B",
    lastCommunications: [
      { type: "Phone Call", date: "10th Sept", notes: "Client feedback" },
      { type: "Email", date: "12th Sept", notes: "Proposal discussion" },
    ],
    nextCommunication: "Phone Call - 25th Oct",
    overdue: true,
    highlightDisabled: false,
  },
  {
    name: "Company C",
    lastCommunications: [
      { type: "LinkedIn Message", date: "1st Oct", notes: "Initial outreach" },
      { type: "Email", date: "3rd Oct", notes: "Follow-up" },
    ],
    nextCommunication: "Email - 10th Oct",
    overdue: false,
    highlightDisabled: false,
  },
];

const Dashboard = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleSelection = (companyName) => {
    setSelectedCompanies((prev) =>
      prev.includes(companyName)
        ? prev.filter((name) => name !== companyName)
        : [...prev, companyName]
    );
  };

  const toggleHighlight = (index) => {
    companies[index].highlightDisabled = !companies[index].highlightDisabled;
  };

  const handleSubmit = () => {
    setShowModal(false);
    setSelectedCompanies([]);
    // Reset highlights or update logic as needed.
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold text-center">User Dashboard</h1>
      </header>

      <div className="p-6">
        {/* Company Grid */}
        <div className="company-grid">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Companies</h2>
          <table className="table-auto w-full border-collapse rounded-lg shadow-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">Select</th>
                <th className="p-3 text-left">Company Name</th>
                <th className="p-3 text-left">Last Communications</th>
                <th className="p-3 text-left">Next Scheduled Communication</th>
                <th className="p-3 text-left">Disable Highlight</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    company.highlightDisabled
                      ? "bg-white"
                      : company.overdue
                      ? "bg-red-100"
                      : company.nextCommunication.includes("10th Oct")
                      ? "bg-yellow-100"
                      : "bg-white"
                  } hover:bg-gray-100 transition-all duration-300`}
                >
                  <td className="p-3">
                    <input
                      type="checkbox"
                      onChange={() => toggleSelection(company.name)}
                      checked={selectedCompanies.includes(company.name)}
                    />
                  </td>
                  <td className="p-3">{company.name}</td>
                  <td className="p-3">
                    {company.lastCommunications.map((comm, idx) => (
                      <div
                        key={idx}
                        data-tooltip-id={`tooltip-${index}-${idx}`}
                        data-tooltip-content={comm.notes}
                        className="cursor-pointer"
                      >
                        {comm.type} - {comm.date}
                      </div>
                    ))}
                    <Tooltip />
                  </td>
                  <td className="p-3">{company.nextCommunication}</td>
                  <td className="p-3">
                    <button
                      className="text-blue-600 underline"
                      onClick={() => toggleHighlight(index)}
                    >
                      {company.highlightDisabled ? "Enable" : "Disable"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Communication Button */}
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => setShowModal(true)}
          disabled={selectedCompanies.length === 0}
        >
          Communication Performed
        </button>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-xl font-bold mb-4">Log Communication</h2>
              <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                  Type of Communication:
                  <select className="block w-full p-2 border rounded">
                    <option>LinkedIn Post</option>
                    <option>Email</option>
                    <option>Phone Call</option>
                  </select>
                </label>
                <label className="block mb-2">
                  Date of Communication:
                  <input
                    type="date"
                    className="block w-full p-2 border rounded"
                  />
                </label>
                <label className="block mb-2">
                  Notes:
                  <textarea
                    className="block w-full p-2 border rounded"
                    rows="3"
                  ></textarea>
                </label>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
