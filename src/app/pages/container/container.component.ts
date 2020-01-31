import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  departmentName = '';
  departments: any[] = [];

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getDepartments()
      .subscribe(data => {
        this.departments = data;
      });
  }

  addDepartment(): void {
    this.service.addDepartment(this.departmentName)
      .subscribe(data => {
        this.departments.push(data);
        this.departmentName = '';
      });
  }

}
