import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../services/employees.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    createdDate: '',
    phone: 0,
    salary: 0,
    department: ''
  }
  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeesService){ }

  ngOnInit(): void{
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')

        if (id) {
          this.employeeService.getEmployee(id).subscribe({
            next: (response) => {
              this.employeeDetails = response;
              console.log(response)
            }
          })
        }
      }
    })
  }
  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    })
  }
  deleteEmployee(id: string){
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    })
  }
}
