import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './service/auth.service/auth.service';
import { WeatherService } from './service/weather_service/weather.service';
import { MenuService } from './service/service_menu/menu.service';
import { PlatosService } from './service/platos_service/platos.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { WeatherComponent } from './weather/weather.component';
import { RegisterComponent } from './register/register.component';
import { ParentComponent } from './parent/parent.component';
import { AcordionComponent } from './acordion/acordion.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormularioComponent } from './formulario/formulario.component';  
import { ListaPlatosComponent } from './lista-platos/lista-platos.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    
    NavbarComponent,
    MenuComponent,
    WeatherComponent,
    RegisterComponent,
    ParentComponent,
    AcordionComponent,
    FormularioComponent ,
    ListaPlatosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [AuthService,WeatherService,MenuService,PlatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
