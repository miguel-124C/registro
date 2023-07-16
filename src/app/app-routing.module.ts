import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { AppComponent } from './app.component';
import { VistaComponent } from './components/lista/vista.component';

const routes: Routes = [
  {path:'lista', component: VistaComponent},
  {path:'add', component: FormComponent},
  {path:'edit/:id', component: FormComponent},
  {path:'**',redirectTo:'lista'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
