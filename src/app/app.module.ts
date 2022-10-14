import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { AcumuladoPlatosComponent } from './components/acumulado-platos/acumulado-platos.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetallePlatoComponent } from './components/detalle-plato/detalle-plato.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlatoItemComponent } from './components/plato-item/plato-item.component';
import { BuscadorPageComponent } from './pages/buscador-page/buscador-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { YesNoPipe } from './pipes/yes-no.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AcumuladoPlatosComponent,
    BuscadorComponent,
    DetallePlatoComponent,
    FormLoginComponent,
    NavbarComponent,
    PlatoItemComponent,
    BuscadorPageComponent,
    HomePageComponent,
    YesNoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
