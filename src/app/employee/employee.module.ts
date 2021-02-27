import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';



@NgModule({
  declarations: [EmployeeComponent, EmployeeDetailsComponent , EmployeeCreationComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
