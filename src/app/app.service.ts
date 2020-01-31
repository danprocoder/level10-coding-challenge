import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Employee {
  id: number;
  name: string;
  position: string;
  allocation: number;
}

interface Department {
  id: number;
  name: string;
  managerId?: number;
}

const ALLOCATIONS = {
  developer: 1000,
  'qa-tester': 5000,
  manager: 30000
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  departments: Department[] = [];
  employees: Employee[] = [];

  constructor() { }

  addEmployee(name: string, position: string): Observable<Employee> {
    const employee: Employee = {
      id: Math.floor(Math.random() * 100000000),
      name,
      position,
      allocation: ALLOCATIONS[position]
    };
    this.employees.push(employee);
    return of(employee);
  }

  addDepartment(name: string): Observable<Department> {
    const department = {
      id: Math.floor(Math.random() * 100000000),
      name
    };
    this.departments.push(department);

    return of(department);
  }

  getDepartments(): Observable<Department[]> {
    return of([...this.departments]);
  }

  getDepartmentById(id: number): Observable<Department> {
    return of(
      this.departments.find(item => item.id === id)
    );
  }

  getEmployeesByDepartment(departmentId: number): Observable<Employee[]> {
    return of(
      this.employees.filter(
        (employee: Employee) => true
      )
    );
  }

  getEmployees(): Observable<Employee[]> {
    return of([...this.employees]);
  }

}
