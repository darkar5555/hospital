import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


//Rutas
import { APP_ROUTES } from './app.routes';

//Modulos
import { PagesModule } from './pages/pages.module';


import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//services
import { ServiceModule } from './services/service.module';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    // DashboardComponent,
    // ProgressComponent,
    // Graficas1Component,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,
    //PagesComponent,
    RegisterComponent,

    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
