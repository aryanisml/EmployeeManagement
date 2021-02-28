import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsService {
  constructor() {}

  getColDef() {
    return [
      { field: 'empId', sortable: true, filter: true },
      { field: 'name', sortable: true, filter: true },
      { field: 'age', sortable: true, filter: true },
      { field: 'phone', sortable: true, filter: true },
      { field: 'address', sortable: true, filter: true },
      {
        field: 'delete',
        cellRenderer: 'deleteCellRenderer',
      },
    ];
  }
}
