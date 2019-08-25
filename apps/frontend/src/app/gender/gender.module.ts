import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GenderRoutingModule } from './gender-routing.module';
import { GenderComponent } from './gender.component';
@NgModule({
  declarations: [GenderComponent],
  imports: [
    CommonModule,
    GenderRoutingModule,
    SharedModule
  ]
})
export class GenderModule { }
