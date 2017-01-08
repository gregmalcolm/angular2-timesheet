import { Component, OnInit } from '@angular/core';
import TimesheetService from '../timesheet.service';
import { IdentityService } from '../../auth';
import { Router } from '@angular/router';
import {Timesheet} from '../Timesheet';

@Component({
  selector: 'app-timesheet-list',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.scss']
})
export class TimesheetListComponent implements OnInit {

  timesheets: Timesheet[];
  format: string;

  constructor(private timesheetService: TimesheetService,
              private identityService: IdentityService) {
    this.timesheets = [];
    this.format = 'MM/dd/yy';
  }


  ngOnInit() {
    this.timesheetService.getTimesheets(this.identityService.user).subscribe((timesheets) => {
      this.timesheets = timesheets;
    });
  }

  openTimesheet(timesheet) {
    // Hint: You'll need to wire in the router
    console.log('route to the timesheet component')
  }

}
