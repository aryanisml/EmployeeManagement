import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';


const employeeRoutes: Routes = [{
    path: '/details',
    componet: EmployeeDetailsComponent
}, {
    path: '',
    component: EmployeeCreationComponent
}];

@NgModule({
    imports: [RouterModule.forchild(employeeRoutes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
