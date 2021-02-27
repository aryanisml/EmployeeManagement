import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsService {
  constructor() {}

  getColDef() {
    return [
      { field: 'employeeId', sortable: true, filter: true },
      { field: 'name', sortable: true, filter: true },
      { field: 'age', sortable: true, filter: true },
      { field: 'mobileNo', sortable: true, filter: true },
      { field: 'address', sortable: true, filter: true },
      { field: 'delete', sortable: true, filter: true},
    ];
  }
}
