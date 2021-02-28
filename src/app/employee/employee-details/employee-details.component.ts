import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EmployeeDetailsService } from './employee-details.service';
import { EmployeeService } from '../employee.service';
import { DeleteCellRendererComponent } from './delete/delete-cell-renderer.component';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  rowData: Employee[] = [];
  columnDefs: any;
  frameworkComponents: any;

  constructor(
    private _empService: EmployeeService,
    private _empDetailsService: EmployeeDetailsService
  ) {
    this.createColDef();
    this.frameworkComponents = this.getFrameworkComponents();
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

  getFrameworkComponents (){
    return {
      deleteCellRenderer : DeleteCellRendererComponent
    }
  }
}
