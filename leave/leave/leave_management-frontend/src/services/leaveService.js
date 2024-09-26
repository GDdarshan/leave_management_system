import axios from 'axios';

const API_URL = 'http://localhost:8080/api/leaves'; // Your Spring Boot backend URL

export const getAllLeaveRequests = async () => {
  return await axios.get(API_URL);
};

export const createLeaveRequest = async (leaveRequest) => {
  return await axios.post(API_URL, leaveRequest);
};

export const getLeaveRequestById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const updateLeaveRequest = async (id, leaveRequest) => {
  return await axios.put(`${API_URL}/${id}`, leaveRequest);
};

export const deleteLeaveRequest = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
