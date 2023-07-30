import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Empleado } from './empleado';



@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private mensaje = new BehaviorSubject<string>('');
  public mensaje$ = this.mensaje.asObservable();

  // URL Listado Empledos (Metodo GET) generados en TP2
  private url = "http://localhost:8080/empleado";

  constructor(private httpClient: HttpClient) { }


  // Metodo para obtener cada empleado 
  obtenerListaEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.url}`);
  }

  //Metodo para buscar empleado
  obtenerDetalleEmpleados(id:number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.url}/${id}`);
  }
  //Metodo para agregar empleado
  aregarEmpleado(empleado:Empleado): Observable<Object> {
    return this.httpClient.post(`${this.url}`, empleado)
  }
  // Metodo para eliminar un empleado
  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/${id}`)
  }

  // Metodo para actualizar el empleado 
  actualizarEmpleado(id:number, empleado:Empleado ): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`,empleado);
  }
  enviarMensaje(msj:string){
    this.mensaje.next(msj);
  }
  
}
