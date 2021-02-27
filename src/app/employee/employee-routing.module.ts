import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCreationComponent } from './employee-creation/employee-creation.component';
import { EmployeeComponent } from './employee.component';


const employeeRoutes: Routes = [
{  
    path :'',
    component : EmployeeComponent,
    children : [
            {
                path: 'details',
                component : EmployeeDetailsComponent
            }, {
                path: '',
                component: EmployeeCreationComponent
            },
        
    ]

}



];

@NgModule({
    imports: [RouterModule.forChild(employeeRoutes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
