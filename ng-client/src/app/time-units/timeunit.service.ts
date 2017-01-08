import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExtHttp } from '../shared/extHttp.service';
import { TimeUnit } from './TimeUnit';
import { User } from '../auth';

@Injectable()
export class TimeUnitService {
  constructor(private http: ExtHttp) {}

}
