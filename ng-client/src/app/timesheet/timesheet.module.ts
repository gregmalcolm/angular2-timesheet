import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'
import {MaterialModule} from '@angular/material';

import {IdentityService} from '../auth'

import TimesheetService from './timesheet.service'
import {TimesheetListComponent} from './timesheet-list';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
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
