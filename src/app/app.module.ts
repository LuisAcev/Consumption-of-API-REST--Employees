import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { DetallesEmpleadoComponent } from './components/detalles-empleado/detalles-empleado.component';
import { ActualizarEmpleadoComponent } from './components/actualizar-empleado/actualizar-empleado.component'


@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    AgregarEmpleadoComponent,
    DetallesEmpleadoComponent,
    ActualizarEmpleadoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
