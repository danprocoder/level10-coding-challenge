import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { ContainerComponent } from './container/container.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    ContainerComponent,
    DepartmentComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ComponentsModule
  ],
  exports: [
    ContainerComponent,
    DepartmentComponent
  ]
})
export class PagesModule { }
