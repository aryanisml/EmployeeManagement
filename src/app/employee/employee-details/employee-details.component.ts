import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  // columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }];

  // rowData = [
  //   { make: "Toyota", model: "Celica", price: 35000 },
  //   { make: "Ford", model: "Mondeo", price: 32000 },
  //   { make: "Porsche", model: "Boxter", price: 72000 }
  // ];
  constructor(private _empService: EmployeeServiceService) {
    this.getEmployees();
  }
  // rowData$: Observable<Employee[]> | undefined;
  rowData: any;
  ngOnInit(): void {
    
  }

  columnDefs = [
    {  field: 'empId', sortable: true, filter: true },
    {  field: 'name', sortable: true, filter: true },
    {  field: 'age', sortable: true, filter: true },
    {  field: 'phone', sortable: true, filter: true },
    {  field: 'email', sortable: true, filter: true },
    {  field: 'address', sortable: true, filter: true },
  ];
  getEmployees() {
    // this.rowData$ = this._empService.getEmployees()
    // console.log('EMPDATA:', this.rowData$);
   this._empService.getEmployees().subscribe((d) => (this.rowData = d));
  }
}
