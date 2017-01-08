import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'
import {MaterialModule} from '@angular/material';

import {IdentityService} from '../auth'

import TimesheetService from './timesheet.service'
import {TimesheetComponent} from './timesheet.component'
import {TimesheetListComponent} from './timesheet-list';
import {TimesheetDetailComponent} from './timesheet-detail';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TimesheetComponent,
    TimesheetDetailComponent,
    TimesheetListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    RouterModule,
  ],
  providers: [TimesheetService, IdentityService],
  bootstrap: []
})
export class TimesheetModule {
}
