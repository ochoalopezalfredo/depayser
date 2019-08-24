import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

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
  }
  constructor(private readonly http: HttpClient) { }
  category(category) {
    const params = {
      ...this._params,
      isCacheable: "true",
      node: category || 'catalogo',
      domain: "https://mfwkweb-api.clarovideo.net/",
      origin: "https://www.clarovideo.com/",
      user_id: "22822863"
    }
    return this.http.get<any>(`${environment.domain}/services/cms/level`, { params: params }).pipe(map(res=> res.response.modules.module))
  }  
}
