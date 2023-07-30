import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})

export class ListaEmpleadosComponent implements OnInit {
 
  empleados: Empleado[];

  constructor(private empleadoServicio: EmpleadoService, private router:Router) { }

  ngOnInit(): void {
    this. obtenerEmpleado();

  }

  private obtenerEmpleado(){
    this.empleadoServicio.obtenerListaEmpleados().subscribe(dato => {
      this.empleados = dato;

    })

  }

  eliminarEmpleado(id:number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato=>{
      this.obtenerEmpleado();
    })
  }

  detallesEmpleado(id:number){
    this.router.navigate([`detalles-empleado/${id}`]);
    
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);

    
  }
}
