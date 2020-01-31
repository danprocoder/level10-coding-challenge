import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  name = '';
  position = '';

  employees: any[] = [];

  constructor(
    private service: AppService
  ) { }

  ngOnInit() {
    this.service.getEmployees()
      .subscribe(employees => {
        this.employees = employees;
      });
  }

  addEmployee() {
    this.service.addEmployee(this.name, this.position)
      .subscribe(data => {
        this.name = '';
        this.position = '';

        this.employees.unshift(data);
      });
  }

}
