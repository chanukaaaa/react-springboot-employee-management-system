package com.example.backend.service;

import java.util.List;

import com.example.backend.dto.EmployeeDto;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeByID(Long employeeId);

    List<EmployeeDto> getAllEmployees(); 

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);

}
