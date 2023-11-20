import React, { useState, useEffect } from 'react';

const Getcsv = () => {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/getcsv');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCsvData(data);
      } catch (error) {
        console.error('Error fetching CSV:', error);
      }
    };

    fetchData();
  }, []); 

  return (
<div>
      <h1>CSV Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index}>
              <td>{row.Name}</td>
              <td>{row.Age}</td>
              <td>{row.Email}</td>
              <td>{row.Phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Getcsv;
