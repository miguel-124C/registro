import { Component } from '@angular/core';
import { Empleados } from './interface/empleados.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registro';

  public formVisible: boolean = false;
  public empleadoEdit!: Empleados;

  showForm(active: boolean){
    this.formVisible = active;
  }
}
