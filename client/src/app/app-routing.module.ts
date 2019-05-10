import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'docentes', loadChildren: './docentes/docentes.module#DocentesModule', data: {title: 'Docentes'}},
  {path: 'alumnos', loadChildren: './alumnos/alumnos.module#AlumnosModule', data: {title: 'Alumnos'}},
  {path: 'evaluacion', loadChildren: './evaluacion/evaluacion.module#EvaluacionModule', data: {title: 'Evaluacion'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
