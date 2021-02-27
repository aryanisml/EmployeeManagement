import { Injectable } from '@angular/core';
import { Employee } from '../../app/employee/entity/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    api: string = "http://localhost:3000"
    constructor(private http: HttpClient) { }
    // Adds an employee to JSON DB
    addEmployee(employee: Employee) {
        this.http.post(`${this.api}/employees`, employee).subscribe(
            data => {
                console.log('POST Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            }
        );
    }

}
