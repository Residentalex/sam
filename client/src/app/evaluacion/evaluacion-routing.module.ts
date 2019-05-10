import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluacionMethodComponent } from './evaluacion-method/evaluacion-method.component';
import { EvaluacionRecordComponent } from './evaluacion-record/evaluacion-record.component';


const routes: Routes = [
  {path: 'evaluacion-method', component: EvaluacionMethodComponent, data: {title: 'Metodo de Evaluación'}},
  {path: '', component: EvaluacionRecordComponent, data: {title: 'Registro'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluacionRoutingModule { }
