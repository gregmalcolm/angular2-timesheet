import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation';
import { EmployeeListComponent, EmployeeNewComponent } from './employee';
import { ProjectNewComponent, ProjectListComponent } from './project';

//TODO: should each component define it's own route?
const appRoutes: Routes = [
  {
    path: 'home',
    component: NavigationComponent,
    children: [
      { path: 'projects', component: ProjectListComponent, pathMatch: 'full'},
      { path: 'projects/new', component: ProjectNewComponent, pathMatch: 'full'},
      { path: 'employees', component: EmployeeListComponent, pathMatch: 'full'},
      { path: 'employees/new', component: EmployeeNewComponent },
    ]
  },
  {
    path: '',
    redirectTo: '/home/projects',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
