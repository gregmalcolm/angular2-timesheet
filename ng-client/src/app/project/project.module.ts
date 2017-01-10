import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [ProjectListComponent],
  exports: [ProjectListComponent],
  imports: [
    CommonModule, MaterialModule.forRoot()
  ]
})
export class ProjectModule { }
