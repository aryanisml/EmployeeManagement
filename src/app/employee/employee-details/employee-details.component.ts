import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EmployeeDetailsService } from './employee-details.service';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  rowData: Employee[] = [];
  columnDefs: any;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _empService: EmployeeService,
    private _empDetailsService: EmployeeDetailsService
  ) {
    this.createColDef();
  }

  ngOnInit(): void {
    this.fetchEmployeeInformation();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  fetchEmployeeInformation() {
    this._empService
      .getEmployees()
      .pipe(takeUntil(this.destroy$))
      .subscribe((empData) => {
        console.log(empData);
        this.rowData = empData;
      });
  }
  createColDef() {
    this.columnDefs = this._empDetailsService.getColDef();
  }
}
