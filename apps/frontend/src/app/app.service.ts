import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { ResponseContent } from './interfaces/response-content.interface';
import { ResponseRequest } from './interfaces/response-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _params = {
    api_version: "v5.86",
    authpn: "webclient",
    authpt: "tfg1h3j4k6fd7",
    format: "json",
    region: "mexico",
    device_id: "web",
    device_category: "web",
    device_model: "web",
    device_type: "web",
    device_manufacturer: "generic",
    HKS: "9s5qq76r3g6sg4jb90l38us52",
    user_id: "22822863"
  }
  constructor(private http: HttpClient) { }
  category(category, from?: string) {
    const params = {
      ...this._params,
      from: from || "0",
      isCacheable: "true",
      node: category || 'catalogo',
      domain: "https://mfwkweb-api.clarovideo.net/",
      origin: "https://www.clarovideo.com/",
    }
    return this.http.get<ResponseRequest>(`${environment.domain}/services/cms/level`, { params: params }).
      pipe(mergeMap(data => this.http.get<ResponseContent>(`${environment.domain}/${data.response.modules.module.find(item => item.type === 'listadoinfinito').components.component.find(item => item.type === 'Listadoinfinito').properties.url}`, { params: data.entry }).pipe(map(res => res.response.groups))))
  }
  loadMore(category, from) {
    return this.category(`gen_${category}`, from);
  }
  details(groupId) {
    const params = {
      ...this._params,
      group_id: groupId
    }
    return this.http.get<any>(`${environment.domain}/services/content/data`, { params: params }).pipe(map(data =>  data.response.group.common.extendedcommon))
  }
}
