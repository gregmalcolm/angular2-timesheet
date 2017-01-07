import {Component, OnInit} from '@angular/core';
import {Employee} from '../Employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['././employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  condition: boolean;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
    this.condition = false;
  }

}
