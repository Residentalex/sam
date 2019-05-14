import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocentesFormComponent } from './docentes-form/docentes-form.component';
import { DocentesSearchComponent } from './docentes-search/docentes-search.component';
import { DocentesScheaduleComponent } from './docentes-scheadule/docentes-scheadule.component';
import { DocentesAbsencesComponent } from './docentes-absences/docentes-absences.component';
import { DocentesEvaluationComponent } from './docentes-evaluation/docentes-evaluation.component';

const routes: Routes = [
  { path: 'docentes-form', component: DocentesFormComponent, data: { breadcrumb: 'Ficha' } },
  { path: '', component: DocentesSearchComponent },
  { path: 'docentes-scheadule', component: DocentesScheaduleComponent, data: { breadcrumb: 'Horario' } },
  { path: 'docentes-absences', component: DocentesAbsencesComponent, data: { breadcrumb: 'Ausencias' } },
  { path: 'docentes-evaluation', component: DocentesEvaluationComponent, data: { breadcrumb: 'Evaluación' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesRoutingModule { }
