import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-creation',
  templateUrl: './employee-creation.component.html',
  styleUrls: ['./employee-creation.component.scss']
})
export class EmployeeCreationComponent implements OnInit {
  empCreateForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) { }
  ngOnInit() {
    this.empCreateForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]

    });
  }
  // getter for access to form fields
  get f() { return this.empCreateForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.empCreateForm.invalid) {
      return;
    }
    this.employeeService.addEmployee(this.empCreateForm.value);
    //this.router.navigate(["Employees"]);
  }

}
