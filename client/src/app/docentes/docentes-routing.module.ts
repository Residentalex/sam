import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocentesFormComponent } from './docentes-form/docentes-form.component';
import { DocentesSearchComponent } from './docentes-search/docentes-search.component';
import { DocentesScheaduleComponent } from './docentes-scheadule/docentes-scheadule.component';
import { DocentesAbsencesComponent } from './docentes-absences/docentes-absences.component';
import { DocentesEvaluationComponent } from './docentes-evaluation/docentes-evaluation.component';

const routes: Routes = [
  {path: 'docentes-form', component: DocentesFormComponent, data: {title: 'Ficha'}},
  {path: '', component: DocentesSearchComponent, data: {title: 'Consulta'}},
  {path: 'docentes-scheadule', component: DocentesScheaduleComponent, data: {title: 'Horario'}},
  {path: 'docentes-absences', component: DocentesAbsencesComponent, data: {title: 'Ausencias'}},
  {path: 'docentes-evaluation', component: DocentesEvaluationComponent, data: {title: 'Evaluación'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesRoutingModule { }
