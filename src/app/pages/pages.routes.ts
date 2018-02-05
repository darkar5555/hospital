import {  RouterModule, Routes  } from '@angular/router'

//componentes
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';


const pagesRoutes: Routes =[
    { path: '',             
      component: PagesComponent,
      canActivate: [LoginGuardGuard],
      children: [
          { path: 'dashboard',          component: DashboardComponent, data: { titulo: 'Dashboard'} },
          { path: 'progress',           component: ProgressComponent, data: { titulo: 'Progress'} },
          { path: 'graficas1',          component: Graficas1Component, data: { titulo: 'Graficas'} },
          { path: 'promesas',           component: PromesasComponent, data: { titulo: 'Promesas'} },
          { path: 'account-settings',   component: AccountSettingsComponent, data: { titulo: 'Ajustes de Tema'}},
          { path: 'rxjs',               component: RxjsComponent, data: { titulo: 'Rxjs'}},
          { path: '',           redirectTo: '/dashboard', pathMatch: 'full'  }
      ]   
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);