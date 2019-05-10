import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosMatriculacionComponent } from './alumnos-matriculacion/alumnos-matriculacion.component';
import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';
import { AlumnosSearchComponent } from './alumnos-search/alumnos-search.component';
import { AlumnosScheaduleComponent } from './alumnos-scheadule/alumnos-scheadule.component';
import { AlumnosAbsencesComponent } from './alumnos-absences/alumnos-absences.component';
import { AlumnosFamilyComponent } from './alumnos-family/alumnos-family.component';
import { AlumnosRecordComponent } from './alumnos-record/alumnos-record.component';
import { AlumnosSectionComponent } from './alumnos-section/alumnos-section.component';

@NgModule({
  declarations: [AlumnosMatriculacionComponent, AlumnosFormComponent, AlumnosSearchComponent, AlumnosScheaduleComponent, AlumnosAbsencesComponent, AlumnosFamilyComponent, AlumnosRecordComponent, AlumnosSectionComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
