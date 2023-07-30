import Swal from 'sweetalert2'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../lista-empleados/empleado.service';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Empleado } from '../lista-empleados/empleado';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  ///Creacion del formGroup para el formulario
  empleados: Empleado;

  public form: FormGroup ;

  id:number; 
  constructor(private empleadoServicio : EmpleadoService, private router :Router, private fb: FormBuilder, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.empleados = new Empleado();
    this.id = this.route.snapshot.params['id'];
    this.form = this.initForm();
     this.empleadoServicio.obtenerDetalleEmpleados(this.id).subscribe(dato => {
      this.empleados = dato;
    })

  }

  // Metodo para agregar empleado
  actualizarEmpleado(){

    this.empleadoServicio.actualizarEmpleado(this.id, this.form.value).subscribe(dato =>{
      this.redirectListaEmpleados();
    }, error =>{
      console.log(error)
      const status2 = error.error.status;
      const status1 = error.status;
      const err1 = error.error.message;
      const err2 = error.error.errors;  
       this.errores(err1, err2, status1, status2);
    } );
  
  }

  redirectListaEmpleados(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
      
    this.actualizarEmpleado();
  }

  initForm(): FormGroup {
     return this.fb.group({
            nroDocumento:['',[Validators.required]],
            nombre:['',[Validators.required, Validators.pattern(/[a-zA-Z ]+$/)]],
            apellido:['',[Validators.required,Validators.pattern(/[a-zA-Z ]+$/)]],
            email:['',[Validators.required , Validators.email, Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]],
            fechaNacimiento:['',[Validators.required]],
            fechaIngreso:['',[Validators.required]]

            })
  }

// metodo para manejo de errores desde el back-end
  errores(err1:[], err2:[],status1: number, status2: number){ 
    
     if(status2 === 400){
      return err2.forEach(element => {
          Swal( "Error: "+`${status2}`,
              `${element}`,
              'error');
         });
      }
    
    if (status1== 409){
      return Swal( "Error: "+`${status1}`,
      `${err1}`,
      'error');
    }

    if (status1 === 400){
      return Swal( "Error: "+`${status1}`,
      `${err1}`,
      'error');
    }
          
 }
  
}
