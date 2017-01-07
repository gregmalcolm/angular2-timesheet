import { Component, OnInit } from '@angular/core';
import { Project } from '../Project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor() {
    this.projects = [];
  }

  ngOnInit() {
    this.projects = [
      new Project({name: 'Project 1', description: 'this is project 1'}),
      new Project({name: 'Project 2', description: 'this is project 2'}),
      new Project({name: 'Project 3', description: 'this is project 3'}),
      new Project({name: 'Project 4', description: 'this is project 4'})
    ]
  }

}
