import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [

  {
    path: '',
  component: EmployeeListComponent
},
{
  path: 'employees',
component: EmployeeListComponent
},
{
path: 'employees/add',
component: AddEmployeeComponent
},
{
path: 'employees/edit/:id',
component: EditEmployeeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
