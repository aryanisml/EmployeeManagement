import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../employee/employee';

const apiURL = 'http://localhost:3000/employees/';

@Injectable({
  providedIn: 'root'
})

export class EmployeeServiceService {

  
  constructor(private httpClient: HttpClient) { }
  
  getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(apiURL)
  }

}
