import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  departments = [
    {id: 1,value: 'Dep 1'},
    {id: 1,value: 'Dep 2'},
    {id: 1,value: 'Dep 3'}
  ];

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl('0'),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
