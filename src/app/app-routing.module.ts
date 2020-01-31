import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './pages/container/container.component';
import { DepartmentComponent } from './pages/department/department.component';
import { EmployeesComponent } from './pages/employees/employees.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'department/:id', component: DepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
