import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleados } from '../interface/empleados.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListEmpleadosService {
  public listEmpleado: Empleados[] = [];
  public registerEdit: string = 'Registrar';

  public empleadoEdit!: Empleados;
  
  constructor(
    private http: HttpClient
  ){}

  getEmpleado(path: string): Observable<Empleados[]>{
    return this.http.get<Empleados[]>("http://localhost:3000/"+path)
      .pipe(map(data => data));
  }

  getById(id: string): Observable<Empleados>{
    return this.http.get<Empleados>("http://localhost:3000/empleados/"+id)
      .pipe(map(data => data));
  }

  saveEmpleado(body: Empleados): Observable<boolean>{
    return this.http.post<boolean>("http://localhost:3000/empleados",body)
    .pipe(map(data => data));
  }
  updateEmpleado(id: string, body: Empleados): Observable<Empleados>{
    return this.http.put<Empleados>("http://localhost:3000/empleados/"+id, body)
    .pipe(map(data => data))
  }
  deleteEmpleado(id: string): Observable<boolean>{
    return this.http.delete<boolean>("http://localhost:3000/empleados/"+id)
    .pipe(map(data => data))
  }

}
