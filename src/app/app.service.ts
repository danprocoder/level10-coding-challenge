import { Injectable } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  position: string;
  allocation: number;
  departmentId: number;
}

interface Department {
  id: number;
  name: string;
  managerId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  departments: Department[] = [];
  employees: Employee[] = [];

  constructor() { }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  addDepartment(department: Department): void {
    this.departments.push(department);
  }

  getDepartments(): Department[] {
    return this.departments;
  }

  getEmployeesByDepartment(departmentId: number): Employee[] {
    return this.employees.filter((employee: Employee) => employee.departmentId === departmentId);
  }

}
