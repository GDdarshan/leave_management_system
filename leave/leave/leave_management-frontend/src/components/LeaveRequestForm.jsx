import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LeaveRequestForm = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('PENDING');
  const navigate = useNavigate();

  const createLeaveRequest = async (leaveRequest) => {
    try {
      const response = await fetch('http://localhost:8080/api/leaves', {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leaveRequest),
      });

      if (!response.ok) {
        throw new Error('Failed to create leave request');
      }

      return response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newLeaveRequest = { employeeName, startDate, endDate, status };

    createLeaveRequest(newLeaveRequest)
      .then(() => {
        navigate('/');  // Redirect to home page after successful submission
      })
      .catch((error) => {
        console.error('Error submitting leave request:', error);
        alert('Failed to submit leave request');
      });
  };

  return (
    <div>
      <h2>Create Leave Request</h2>
      <form onSubmit={handleSubmit}>
        <label>Employee Name:</label>
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          required
        />
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="PENDING">Pending</option>
          <option value="APPROVED">Approved</option>
          <option value="REJECTED">Rejected</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaveRequestForm;
