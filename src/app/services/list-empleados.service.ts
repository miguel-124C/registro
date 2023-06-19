import { Injectable } from '@angular/core';
import { Empleados } from '../interface/empleados.interface';

@Injectable({
  providedIn: 'root'
})
export class ListEmpleadosService {
  
  saveLocalStorage(){
    localStorage.setItem('empleados', JSON.stringify(this.listEmpleado))
  }
  loadLocalStorage(){
    if (!localStorage.getItem('empleados'))return;
   this.listEmpleado = JSON.parse(localStorage.getItem('empleados')!); 
  }

  constructor() {
    this.loadLocalStorage();
  }

  public listEmpleado: Empleados[] = [];
  public registerEdit: string = 'Registrar';

  public empleadoEdit!: Empleados;

  saveEmpleado(empleado: Empleados){
    this.listEmpleado.push(empleado);
    this.saveLocalStorage();
  }
  setEmpleado(empleado: Empleados){
    console.log(empleado.id);
    
    this.listEmpleado.forEach(em => {
      if (em.id == empleado.id) {
        em.nombre = empleado.nombre;
        em.apellido = empleado.apellido;
        em.edad = empleado.edad;
        em.salario = empleado.salario;
        this.saveLocalStorage();
      }
    });
  }
  deleteEmpleado(i: string){
    this.listEmpleado = this.listEmpleado.filter(em => em.id !== i);    
    this.saveLocalStorage();
  }

}
