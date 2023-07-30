import Swal from 'sweetalert2'
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../lista-empleados/empleado.service';
import { Router } from '@angular/router';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
 
  //Creacion del formGroup para el formulario
  
    public form: FormGroup ;

  constructor(private empleadoServicio : EmpleadoService, private router :Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.initForm();
  }

  // Metodo para agregar empleado
  agregarEmpleado(){

    this.empleadoServicio.aregarEmpleado(this.form.value).subscribe(dato =>{
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

  onsubmit(){
      
    this.agregarEmpleado();
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