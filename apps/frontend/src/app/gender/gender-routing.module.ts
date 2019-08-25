import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenderComponent } from './gender.component';
import { GenderResolver } from './gender.resolve';
const routes: Routes = [
  {path:':gender', component: GenderComponent, resolve: {movies: GenderResolver}}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [GenderResolver]
})
export class GenderRoutingModule { }
