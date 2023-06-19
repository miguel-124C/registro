import { Component, EventEmitter, Output } from '@angular/core';
import { ListEmpleadosService } from 'src/app/services/list-empleados.service';

@Component({
  selector: 'shared-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.css']
})
export class AsidebarComponent {
  constructor(public empleados: ListEmpleadosService){}

  @Output()
  public onForm: EventEmitter<boolean> = new EventEmitter();

  public formActive(){
    this.onForm.emit(true);
    this.empleados.registerEdit = 'Registrar';
  }

  public registerEdit: string = this.empleados.registerEdit;
}
