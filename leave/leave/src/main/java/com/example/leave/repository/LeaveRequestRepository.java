package com.example.leave.repository;

import com.example.leave.model.LeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, Long> {
}