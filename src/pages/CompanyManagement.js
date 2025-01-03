import React, { useState } from "react";

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([
    { name: "TechCorp", description: "A leading technology company" },
    { name: "HealthPlus", description: "Healthcare solutions provider" },
  ]);
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");

  const handleAddCompany = () => {
    if (companyName && companyDescription) {
      setCompanies([
        ...companies,
        { name: companyName, description: companyDescription },
      ]);
      setCompanyName("");
      setCompanyDescription("");
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleDeleteCompany = (index) => {
    setCompanies(companies.filter((_, i) => i !== index));
  };

  const commonInputStyles = {
    padding: "10px",
    margin: "5px",
    width: "90%",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const buttonStyles = {
    padding: "10px 20px",
    marginTop: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f8ff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "20px",
            fontSize: "2.5rem",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #007BFF, #85C1E9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          Company Management
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            style={commonInputStyles}
          />
          <input
            type="text"
            placeholder="Company Description"
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
            style={commonInputStyles}
          />
          <button
            onClick={handleAddCompany}
            style={buttonStyles}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Add Company
          </button>
        </div>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {companies.map((company, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#f9f9f9",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.02)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              <span>
                <strong>{company.name}</strong> - {company.description}
              </span>
              <button
                onClick={() => handleDeleteCompany(index)}
                style={{
                  backgroundColor: "#e74c3c",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyManagement;
