import { Injectable } from '@angular/core';
import { Employee } from '../../app/employee/entity/employee';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    apiURL: string = "http://localhost:3000"
    constructor(private httpClient: HttpClient) { }
    public empCount = new Subject<number>();
  
    // Adds an employee to JSON DB
    addEmployee(employee: Employee) {
        this.httpClient.post(`${this.apiURL}/employees`, employee).subscribe(
            data => {
                console.log('POST Request is successful ', data);
               
               this.getEmployees().subscribe(data => {
                   const empLength = data.length
                   console.log('empLength:', empLength)
                   this.empCount.next(empLength);
                   
               })
            },
            error => {
                console.log('Error', error);
            }
        );
    }

    getEmployees(): Observable<Employee[]>{
        return this.httpClient.get<Employee[]>(`${this.apiURL}/employees`);
        
      }

      deleteEmployee(id:number) {
          return this.httpClient.delete(`${this.apiURL}/employees/${id}`);
      }

      getEmpCount(): Observable<number> {
        return this.empCount.asObservable();
      }

}
