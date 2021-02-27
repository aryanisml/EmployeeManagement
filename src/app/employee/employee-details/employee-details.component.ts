import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import {Employee} from '../employee';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private _empService:EmployeeServiceService) { }
  rowData$: Observable<Employee[]> | undefined;
  ngOnInit(): void {
  }

  columnDefs = [
  
    { empId: 'empId', sortable: true, filter: true },
    { name: 'name', sortable: true, filter: true },
    { age: 'age', sortable: true, filter: true },
    { phone: 'phone', sortable: true, filter: true },
    { email: 'email', sortable: true, filter: true },
    { address: 'address', sortable: true, filter: true }
  ];
  getEmployees () {
    this.rowData$ = this._empService.getEmployees()
    console.log('EMPDATA:', this.rowData$);
  }

}
