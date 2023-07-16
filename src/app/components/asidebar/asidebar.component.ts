import { Component,  } from '@angular/core';
import { ListEmpleadosService } from 'src/app/services/list-empleados.service';

@Component({
  selector: 'shared-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.css']
})
export class AsidebarComponent {
  constructor(public empleados: ListEmpleadosService){}
}
