import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from "./countries/pages/by-capital/by-capital.component";
import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { ByRegionComponent } from './countries/pages/by-region/by-region.component';
import { SeeCountryComponent } from './countries/pages/see-country/see-country.component';

export const routes: Routes = [
    {
        path: '',
        component: ByCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: ByRegionComponent,
    },
    {
        path: 'capital',
        component: ByCapitalComponent,
    },
    {
        path: 'country/:id',
        component: SeeCountryComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}