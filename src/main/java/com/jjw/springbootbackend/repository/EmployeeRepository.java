package com.jjw.springbootbackend.repository;

import com.jjw.springbootbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//This is to indicate that the class defines a data repository.
//Repository is a specialized component annotation
@Repository
//pass the table and type of the primary key
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
