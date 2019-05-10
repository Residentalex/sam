import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';
import { AlumnosSearchComponent } from './alumnos-search/alumnos-search.component';
import { AlumnosScheaduleComponent } from './alumnos-scheadule/alumnos-scheadule.component';
import { AlumnosSectionComponent } from './alumnos-section/alumnos-section.component';
import { AlumnosAbsencesComponent } from './alumnos-absences/alumnos-absences.component';
import { AlumnosFamilyComponent } from './alumnos-family/alumnos-family.component';
import { AlumnosRecordComponent } from './alumnos-record/alumnos-record.component';

const routes: Routes = [
  {path: 'alumnos-form', component: AlumnosFormComponent, data: {title: 'Matriculación'}},
  {path: '', component: AlumnosSearchComponent, data: {title: 'Consulta'}},
  {path: 'alumnos-scheadule', component: AlumnosScheaduleComponent, data: {title: 'Horario'}},
  {path: 'alumnos-section', component: AlumnosSectionComponent, data: {title: 'Asignación de Sección'}},
  {path: 'alumnos-absences', component: AlumnosAbsencesComponent, data: {title: 'Ausencias'}},
  {path: 'alumnos-family', component: AlumnosFamilyComponent, data: {title: 'Familias'}},
  {path: 'alumnos-record', component: AlumnosRecordComponent, data: {title: 'Bitacora'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
