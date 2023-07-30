import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { DetallesEmpleadoComponent } from './components/detalles-empleado/detalles-empleado.component';
import { ActualizarEmpleadoComponent } from './components/actualizar-empleado/actualizar-empleado.component';

const routes: Routes = [
  {path : 'empleados', component : ListaEmpleadosComponent},
  {path: '', redirectTo: ' empleados', pathMatch:'full'},
  {path: 'agregar-empleado', component : AgregarEmpleadoComponent},
  {path: 'detalles-empleado/:id', component : DetallesEmpleadoComponent},
  {path: 'actualizar-empleado/:id', component : ActualizarEmpleadoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
