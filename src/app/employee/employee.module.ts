import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../share/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { DeleteCellRendererComponent } from './employee-details/delete/delete-cell-renderer.component';
import { CommonMaterialModule } from '../common-material.module';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeCreationComponent,
    DeleteCellRendererComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    AgGridModule.withComponents([DeleteCellRendererComponent]),
    ReactiveFormsModule,
    CommonMaterialModule
 
  ],
})
export class EmployeeModule {}
