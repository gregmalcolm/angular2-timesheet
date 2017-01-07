import {NgModule} from '@angular/core';
import {ProjectListComponent} from './project-list';
import {FormsModule}   from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';

@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot()
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class ProjectModule {
}
