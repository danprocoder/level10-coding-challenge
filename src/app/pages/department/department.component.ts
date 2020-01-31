import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departmentId: number;

  department: any;

  selectedEmployee: number;
  selectedManager: number;

  employees: any[] = [];
  allEmployees: any[] = [];
  departmentManagers: any[] = [];

  constructor(
    private service: AppService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.departmentId = +this.route.snapshot.paramMap.get('id');

    this.service.getDepartmentById(this.departmentId)
      .subscribe(data => {
        this.department = data;
      });

    this.service.getEmployees()
      .subscribe(data => {
        this.allEmployees = data;
      });

    this.service.getEmployeesByDepartment(this.departmentId)
      .subscribe(data => {
        this.employees = data;
      });

    this.service.getDepartmentManagers(this.departmentId)
      .subscribe(departmentManagers => {
        this.departmentManagers = departmentManagers;
      });
  }

  getManagers() {
    return this.employees.filter(item => item.position === 'manager');
  }

  addEmployee() {
    this.service.addEmployeeToDepartment(
      this.departmentId,
      this.selectedEmployee,
      this.selectedManager
    ).subscribe((data: any) => {
      this.employees.unshift(data.employee);
      this.departmentManagers.push(data.departmentManager);
    });
  }

  getEmployeeManager(empId) {
    const data = this.departmentManagers.find(item => item && item.employee.id === empId);
    return data ? data.manager : null;
  }

}
