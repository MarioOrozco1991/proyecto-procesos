import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrearComponent } from './crear/crear.component';
import { AprobacionComponent } from './aprobacion/aprobacion.component';
import { ReportesComponent } from './reportes/reportes.component';
import { RolComponent } from './rol/rol.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
        path: 'crear',
        component: CrearComponent,
      },
    {
        path: 'aprobacion',
        component: AprobacionComponent,
    },
    {
        path: 'reportes',
        component: ReportesComponent,
    },
    {
        path: 'rol',
        component: RolComponent,
    },

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
