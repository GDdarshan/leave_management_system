import React, { useState, useEffect } from 'react';
import { getLeaveRequestById, updateLeaveRequest } from '../services/leaveService';
import { useParams, useNavigate } from 'react-router-dom';

const LeaveRequestDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [leaveRequest, setLeaveRequest] = useState(null);
  const [loading, setLoading] = useState(true);  // Add loading state

  useEffect(() => {
    getLeaveRequestById(id)
      .then((response) => {
        console.log('API response:', response);  // Log the API response
        setLeaveRequest(response.data);
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching leave request:', error);
        setLoading(false);  // Stop loading on error
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    updateLeaveRequest(id, leaveRequest)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error updating leave request:', error);
      });
  };

  if (loading) return <div>Loading...</div>;  // Show "Loading..." while data is being fetched

  if (!leaveRequest) return <div>No data found for this leave request</div>;  // Handle empty response

  return (
    <div>
      <h2>Leave Request Details</h2>
      <form onSubmit={handleUpdate}>
        <label>Employee Name:</label>
        <input
          type="text"
          value={leaveRequest.employeeName || ''}
          onChange={(e) => setLeaveRequest({ ...leaveRequest, employeeName: e.target.value })}
        />
        <label>Start Date:</label>
        <input
          type="date"
          value={leaveRequest.startDate || ''}
          onChange={(e) => setLeaveRequest({ ...leaveRequest, startDate: e.target.value })}
        />
        <label>End Date:</label>
        <input
          type="date"
          value={leaveRequest.endDate || ''}
          onChange={(e) => setLeaveRequest({ ...leaveRequest, endDate: e.target.value })}
        />
        <label>Status:</label>
        <select
          value={leaveRequest.status || 'PENDING'}
          onChange={(e) => setLeaveRequest({ ...leaveRequest, status: e.target.value })}
        >
          <option value="PENDING">Pending</option>
          <option value="APPROVED">Approved</option>
          <option value="REJECTED">Rejected</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default LeaveRequestDetail;
