import { Component, EventEmitter, Output, } from '@angular/core';
import { Empleados } from 'src/app/interface/empleados.interface';
import { ListEmpleadosService } from 'src/app/services/list-empleados.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent{
  constructor(private empleados: ListEmpleadosService){}

  public listEmpleados: Empleados[] = this.empleados.listEmpleado;

  @Output()
  public onShowForm = new EventEmitter<boolean>();

  showForm(active: boolean, empleado: Empleados){
    this.empleados.registerEdit = 'Editar';
    this.onShowForm.emit(active);
    this.empleados.empleadoEdit = empleado;
  }
  deleteEmpleado(id: string){
    this.empleados.deleteEmpleado(id);
    this.listEmpleados = this.empleados.listEmpleado;
  }

}
