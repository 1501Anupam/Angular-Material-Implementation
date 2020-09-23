import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/shared/department.service';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
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

  constructor(private service: EmployeeService,
    private deptService: DepartmentService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.service.getEmployee();
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.insertEmployee(this.form.value);
      this.form.reset();
      this.notificationService.success(':: Submitted Successfully!');
    }
  }
}
