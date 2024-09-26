import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeaveRequestList from './components/LeaveRequestList';
import LeaveRequestForm from './components/LeaveRequestForm';
import LeaveRequestDetail from './components/LeaveRequestDetail';
import './App.css';
const App = () => {
  return (
    <Router>
      <div>
        <h1>Leave Management System</h1>
        <Routes>
          <Route path="/" element={<LeaveRequestList />} />
          <Route path="/create" element={<LeaveRequestForm />} />
          <Route path="/leave/:id" element={<LeaveRequestDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
