import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getAppDialogs } from './app.dialogs';
import { AppInterceptor } from './app.interceptor';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, DetailsComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    NgxSpinnerModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: getAppDialogs() },
  ],
  entryComponents: [DetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
