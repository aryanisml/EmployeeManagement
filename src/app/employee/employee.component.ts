import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService:EmployeeService) {
    this.employeeCount$ = this.empService.getEmpCount()
    console.log(this.employeeCount$)
   }
  employeeCount$;
  ngOnInit(): void {
    this.empService.getEmployees().subscribe(res => {
      const empLength = res.length;
      this.empService.empCount.next(empLength)
    })
    
  }


}
