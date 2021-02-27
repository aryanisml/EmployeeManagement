import { Component, OnInit } from '@angular/core';
import { AgRendererComponent, ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-delete',
  templateUrl: './delete-cell-renderer.component.html',
  styleUrls: ['./delete-cell-renderer.component.scss'],
})
export class DeleteCellRendererComponent implements AgRendererComponent  {
  constructor() {}
  refresh(params: ICellRendererParams): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    console.log(params);
  }
  deleteEmployee() {}
}
