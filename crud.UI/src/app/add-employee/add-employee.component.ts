import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    createdDate: '',
    phone: 0,
    salary: 0,
    department: ''
  }
  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOninit(): void{

  }
  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) =>{
        this.router.navigate(['employees']);
      }
    });
  }
}
