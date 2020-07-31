//modulos
import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { NbTabsetModule } from '@nebular/theme';
import { ComponentsModule } from '../@theme/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { DataTablesModule } from 'angular-datatables';

//componentes
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AprobacionComponent } from './aprobacion/aprobacion.component';
import { CrearComponent } from './crear/crear.component';
import { RolComponent } from './rol/rol.component';
import { EditarComponent } from './editar/editar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { PoaComponent } from './poa/poa.component';




@NgModule({
  imports: [
  
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbTabsetModule,
    ReactiveFormsModule,
    DataTablesModule,
    ComponentsModule,
  ],
  declarations: [
    PagesComponent,
    AprobacionComponent,
    ReportesComponent,
    CrearComponent,
    RolComponent,
    EditarComponent,
    PoaComponent,
    
  ],
})
export class PagesModule {
}
