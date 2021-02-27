import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';
import {AgGridModule} from 'ag-grid-angular';


@NgModule({
  declarations: [EmployeeComponent, EmployeeDetailsComponent , EmployeeCreationComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ShareModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    ShareModule
  ]
})
export class EmployeeModule { }
