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

  employees: any = [];

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

    this.service.getEmployeesByDepartment(this.departmentId)
      .subscribe(data => {
        this.employees = data;
      });
  }

}
