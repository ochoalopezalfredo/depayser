import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'genero', loadChildren: () => import('./gender/gender.module').then(m => m.GenderModule) },
    { path: '**', redirectTo: '' }
];

const config: ExtraOptions = {
    useHash: false,
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
}
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, config)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
