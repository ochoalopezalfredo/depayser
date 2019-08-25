import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
@Injectable()
export class GenderResolver implements Resolve<any> {
  constructor(private app: AppService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.app.category(`gen_${route.params.gender}`);
  }
}