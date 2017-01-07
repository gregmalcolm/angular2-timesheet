import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project';

const appRoutes: Routes = [
  {
    path: 'projects', component: ProjectListComponent, pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
