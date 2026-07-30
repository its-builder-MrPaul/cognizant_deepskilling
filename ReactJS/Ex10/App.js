import React from "react";
import officeImage from "./office.jpg";

function App() {

  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 65000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 75000,
      Address: "Hyderabad"
    },
    {
      Name: "SmartWorks",
      Rent: 55000,
      Address: "Pune"
    }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="500"
        height="300"
      />

      <h2>Available Office Spaces</h2>

      {offices.map((office, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
            width: "300px"
          }}
        >
          <h3>{office.Name}</h3>

          <p>
            <strong>Rent: </strong>

            <span
              style={{
                color: office.Rent < 60000 ? "red" : "green"
              }}
            >
              ₹{office.Rent}
            </span>
          </p>

          <p>
            <strong>Address:</strong> {office.Address}
          </p>

        </div>
      ))}

    </div>
  );
}

export default App;