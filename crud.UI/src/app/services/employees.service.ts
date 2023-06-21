import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  todayISOString : string = new Date().toISOString();
  baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl);
  }
  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    addEmployeeRequest.createdDate = this.todayISOString;
    return this.http.post<Employee>(this.baseApiUrl, addEmployeeRequest);
  }
  getEmployee(id: string): Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl + '/' + id);
  }
  updateEmployee(id: string, updateEmployeeRequest: Employee) {
    return this.http.put(this.baseApiUrl + '/' + id, updateEmployeeRequest);
  }
  deleteEmployee(id: string): Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl + '/' + id);

  }
}
