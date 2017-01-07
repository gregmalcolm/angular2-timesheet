import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IdentityService} from '../auth';
import TimesheetService from './timesheet.service';
import {Timesheet} from './Timesheet';
import {TimeUnit} from '../time-units';
import {TimeUnitService} from "../time-units/timeunit.service";

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
  providers: [TimesheetService]
})
export class TimesheetComponent implements OnInit {

  timesheet: Timesheet;
  timesheetId: string;

  timeUnits: TimeUnit[];
  loaded: boolean;
  dateFormat: string;

  constructor(private route: ActivatedRoute,
              private identityService: IdentityService,
              private timesheetService: TimesheetService,
              private timeUnitService: TimeUnitService) {
  }

  ngOnInit() {
    this.loaded = false;
    this.dateFormat = 'MM/dd/yy';

    this.route.params.subscribe((params) => {
      this.timesheetId = params['id'];

      this.timesheetService.getTimesheet(this.identityService.user, this.timesheetId).subscribe((timesheet) => {
        this.timesheet = timesheet;
        this.timeUnitService.getTimeUnits(this.identityService.user, this.timesheetId).subscribe(timeUnits => {
          this.timeUnits = timeUnits;
          this.timesheet.timeUnits = this.timeUnits;
          this.loaded = true;
        })
      });
    });
  }
}
