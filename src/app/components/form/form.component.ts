import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleados } from 'src/app/interface/empleados.interface';
import { ListEmpleadosService } from 'src/app/services/list-empleados.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  public titleForm: string;
  public titleButton: string;
  public banderaModifica: boolean = false;
  public Form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private listEmpleados: ListEmpleadosService,
    private route: Router
  ){
    this.titleForm = "Agregar empleado";
    this.titleButton = "Guardar";
  }
  
  @Output()
  public onOcultarForm: EventEmitter<boolean> = new EventEmitter();
  
  ngOnInit(){
    this.cargarEmpleado();
    this.iniciarForm(this.fb);
  }  

  cargarEmpleado(){
    this.activatedRoute.params.subscribe(({id}) => {
      if (!id) return;
      this.listEmpleados.getById(id).subscribe(empleado => {
        this.titleForm = "Editar empleado";
        this.titleButton = "Editar";
        this.banderaModifica = true;
        this.Form.patchValue(empleado);
      });
    });
  }

  iniciarForm(fb: FormBuilder){
    this.Form =fb.group({
      id: [0],
      nombre: ['', [Validators.required]],
      apellido: ['',Validators.required],
      edad: [0,Validators.required],
      salario: [0,Validators.required]
    });
  }

  updateEmpleado(){
    this.listEmpleados.updateEmpleado("1",this.Form.value).subscribe(data => {
      console.log(data);
      
    });
  }

  saveEmpleado(){
    this.listEmpleados.saveEmpleado(this.Form.value).subscribe(data => {

    });
  }

  validar(){
    this.Form.markAllAsTouched();
    if (this.Form.valid) {
      if (this.banderaModifica) {        
        this.updateEmpleado();
      }else this.saveEmpleado();
      this.route.navigate(['lista']);
    }
  }

  validaError(name: string): boolean | null{
    return this.Form.controls[name].errors && this.Form.controls[name].touched;
  }
  
}