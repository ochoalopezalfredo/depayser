import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'catalogo', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule) },
    { path: '**', redirectTo: '' }
];

const config: ExtraOptions = {
    useHash: true,
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
}
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, config)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
