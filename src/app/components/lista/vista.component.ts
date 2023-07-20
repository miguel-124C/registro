import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/interface/empleados.interface';
import { ListEmpleadosService } from 'src/app/services/list-empleados.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit{
  public listEmpleados: Empleados[] = this.empleados.listEmpleado;

  constructor(private empleados: ListEmpleadosService){}
  ngOnInit(): void {
    this.getListEmpleados();
  }

  getListEmpleados(){
    this.empleados.getEmpleado("empleados").subscribe(empleados => {
        this.listEmpleados = empleados;
      });
  }

  deleteEmpleado(id: string){
    this.empleados.deleteEmpleado(id).subscribe(data => {
      this.getListEmpleados();
    });
  }

}
