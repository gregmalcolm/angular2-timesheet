import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import {NavigationModule} from './navigation'
import {ProjectModule} from './project'
import {ExtHttp} from './shared/extHttp.service';
import {MdIconRegistry} from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    NavigationModule,
    ProjectModule
  ],
  providers: [ExtHttp, MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
