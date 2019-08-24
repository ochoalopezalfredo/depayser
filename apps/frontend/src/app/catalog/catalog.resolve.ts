import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogService } from "./catalog.service";
@Injectable()
export class CatalogResolver implements Resolve<any> {
  constructor(private readonly cat: CatalogService) {}
 
  resolve(): Observable<any> {
      return this.cat.catalog;
  }
}