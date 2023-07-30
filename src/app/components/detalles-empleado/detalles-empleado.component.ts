import { Component, OnInit } from '@angular/core';
import { Empleado } from '../lista-empleados/empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../lista-empleados/empleado.service';

@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrls: ['./detalles-empleado.component.css']
})
export class DetallesEmpleadoComponent implements OnInit {

  id:number;
  empleado: Empleado;

  constructor(private route: ActivatedRoute, private empleadoServico:EmpleadoService) { }

  ngOnInit(): void {

    this.id= this.route.snapshot.params['id'];
    console.log(this.id)
    this.empleado = new Empleado();
    this.empleadoServico.obtenerDetalleEmpleados(this.id).subscribe(dato => {
      this.empleado = dato;
    })
  }


}
