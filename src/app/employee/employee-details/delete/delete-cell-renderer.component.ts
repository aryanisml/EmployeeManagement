import { Component, OnInit } from '@angular/core';
import { AgRendererComponent, ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete-cell-renderer.component.html',
  styleUrls: ['./delete-cell-renderer.component.scss'],
})
export class DeleteCellRendererComponent implements AgRendererComponent  {
  constructor(private _empService:EmployeeService) {}
  dataParams:any;
  
  refresh(params: ICellRendererParams): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    console.log(params);
    this.dataParams = params.data;
  }
  deleteEmployee() {
    
    const id = this.dataParams.id
    console.log('delete', id)
    this._empService.deleteEmployee(id).subscribe(res => {
      console.log(res)
      this._empService.getEmployees().subscribe(l =>{
        const emplLength = l.length;
        this._empService.empCount.next(emplLength);
      })
      
    })
    this.refresh(this.dataParams);
  }
}
