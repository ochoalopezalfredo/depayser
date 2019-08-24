import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  activeRequests = 0;
  skippUrls = [];
  constructor(private spinner: NgxSpinnerService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const displayLoadingScreen = this.skippUrls.find(item => new RegExp(item).test(request.url))
    if (!displayLoadingScreen) {
      if (this.activeRequests === 0) {
        this.spinner.show();
      }
      this.activeRequests++;
    }
    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.spinner.hide();
        }
      })
    );
  }
}
