import { Injectable } from '@angular/core';
import { Employee } from '../../app/employee/entity/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    apiURL: string = "http://localhost:3000"
    constructor(private httpClient: HttpClient) { }
    // Adds an employee to JSON DB
    addEmployee(employee: Employee) {
        this.httpClient.post(`${this.apiURL}/employees`, employee).subscribe(
            data => {
                console.log('POST Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            }
        );
    }

    getEmployees(): Observable<Employee[]>{
        return this.httpClient.get<Employee[]>(`${this.apiURL}/employees`);
      }

}
