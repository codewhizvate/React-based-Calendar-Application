import React, { useState } from "react";

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([
    { name: "Email", description: "Send an email" },
    { name: "Phone Call", description: "Make a phone call" },
  ]);
  const [methodName, setMethodName] = useState("");
  const [methodDescription, setMethodDescription] = useState("");

  const handleAddMethod = () => {
    if (methodName && methodDescription) {
      setMethods([...methods, { name: methodName, description: methodDescription }]);
      setMethodName("");
      setMethodDescription("");
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleDeleteMethod = (index) => {
    setMethods(methods.filter((_, i) => i !== index));
  };

  const commonInputStyles = {
    padding: "10px",
    margin: "5px",
    width: "90%",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const buttonStyles = {
    padding: "12px 24px",
    marginTop: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "1rem",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const buttonHoverStyles = {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
  };

  const buttonActiveStyles = {
    transform: "scale(0.98)",
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
          Communication Method Management
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Method Name"
            value={methodName}
            onChange={(e) => setMethodName(e.target.value)}
            style={commonInputStyles}
          />
          <input
            type="text"
            placeholder="Method Description"
            value={methodDescription}
            onChange={(e) => setMethodDescription(e.target.value)}
            style={commonInputStyles}
          />
          <button
            onClick={handleAddMethod}
            style={buttonStyles}
            onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyles)}
            onMouseOut={(e) => Object.assign(e.target.style, buttonStyles)}
            onMouseDown={(e) => Object.assign(e.target.style, buttonActiveStyles)}
            onMouseUp={(e) => Object.assign(e.target.style, buttonHoverStyles)}
          >
            Add Method
          </button>
        </div>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {methods.map((method, index) => (
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
                <strong>{method.name}</strong> - {method.description}
              </span>
              <button
                onClick={() => handleDeleteMethod(index)}
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

export default CommunicationMethodManagement;
