import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path :'employee',
  component : AppComponent,
  children :  [
    {
      path : 'app',
      loadChildren :()=>import('../app/employee/employee.module').then(m=>m.EmployeeModule)
    },
    {
      path : '',
      loadChildren :()=>import('../app/employee/employee.module').then(m=>m.EmployeeModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
