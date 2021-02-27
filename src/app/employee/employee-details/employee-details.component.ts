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
  employees$: Observable<Employee[]> | undefined;
  ngOnInit(): void {
  }

  getEmployees () {
    this.employees$ = this._empService.getEmployees()
    console.log('EMPDATA:', this.employees$);
  }

}
