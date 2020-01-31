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

      if (data.departmentManager) {
        this.departmentManagers.push(data.departmentManager);
      }
    });
  }

  getEmployeeManager(empId) {
    const data = this.departmentManagers.find(item => item && item.employee.id === empId);
    return data ? data.manager : null;
  }

  getAllocation(employee): number {
    if (employee.position !== 'manager') {
      return employee.allocation;
    } else {
      return this.getManagerAllocation(employee);
    }
  }

  private getManagerAllocation(manager): number {
    return this.departmentManagers.reduce((total, current) => {
      if (current && current.manager.id === manager.id) {
        if (current.employee.position === 'manager') {
          return total + this.getManagerAllocation(current.employee);
        } else {
          return total + current.employee.allocation;
        }
      }

      return total;
    }, manager.allocation);
  }

}
