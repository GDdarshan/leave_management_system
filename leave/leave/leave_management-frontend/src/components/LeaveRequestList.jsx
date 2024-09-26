import React, { useState, useEffect } from 'react';
import { getAllLeaveRequests } from '../services/leaveService';
import { Link } from 'react-router-dom';
import '../App.css';

const LeaveRequestList = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    getAllLeaveRequests().then((response) => {
      setLeaveRequests(response.data);
    });
  }, []);

  return (
    <div className="leave-list-container">
      <h2 className="leave-list-title">Leave Requests</h2>
      <Link to="/create" className="create-link">Create New Leave Request</Link>
      <ul className="leave-list">
        {leaveRequests.map((leaveRequest) => (
          <li key={leaveRequest.id} className="leave-item">
            <span className="leave-info">
              {leaveRequest.employeeName} - {leaveRequest.startDate} to {leaveRequest.endDate}
            </span>
              {leaveRequest.id && (  {/* Only show the link if id exists */}
              <Link to={`/leave/${leaveRequest.id}`} className="view-link">View</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaveRequestList;
