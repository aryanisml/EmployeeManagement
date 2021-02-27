import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/employee/employee.module').then(
            (m) => m.EmployeeModule
          ),
        // component : EmployeeComponent
      },
    ],
  },
];
