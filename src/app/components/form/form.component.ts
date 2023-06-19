import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Empleados } from 'src/app/interface/empleados.interface';
import { ListEmpleadosService } from 'src/app/services/list-empleados.service';
import { v4 as uuid } from "uuid";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  constructor(private listEmpleados: ListEmpleadosService){}
  
  @Output()
  public onOcultarForm: EventEmitter<boolean> = new EventEmitter();
  
  ngOnInit(){
    if (this.listEmpleados.registerEdit == 'Registrar'){
      this.llenarEmpleado(this.empleado);
    }else if (this.listEmpleados.registerEdit == 'Editar'){
      this.llenarEmpleado(this.listEmpleados.empleadoEdit);
    }
  }  
  
  public empleado: Empleados = {id: '',nombre: '', apellido: '', edad: 0, salario: 0};
  llenarEmpleado(empleado: Empleados){
    this.empleado = {
      id: empleado.id,
      nombre: empleado.nombre,
      apellido: empleado.apellido,
      edad: empleado.edad,
      salario: empleado.salario
    };
  }

  limpiarForm(){
    this.empleado.id = '';
    this.empleado.nombre = '';
    this.empleado.apellido = '';
    this.empleado.edad = 0;
    this.empleado.salario = 0;
  }

  ocultarShowForm(){
    this.onOcultarForm.emit(false);
  }
  saveEmpleado(){
    this.ocultarShowForm();
    if(this.listEmpleados.registerEdit == 'Registrar'){
      this.empleado.id = uuid();
      this.listEmpleados.saveEmpleado({...this.empleado});
      this.limpiarForm();
    }else if(this.listEmpleados.registerEdit == 'Editar'){
      this.listEmpleados.setEmpleado(this.empleado);
    }
  }
  
}