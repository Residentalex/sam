import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocentesRoutingModule } from './docentes-routing.module';
import { DocentesFormComponent } from './docentes-form/docentes-form.component';
import { DocentesSearchComponent } from './docentes-search/docentes-search.component';
import { DocentesScheaduleComponent } from './docentes-scheadule/docentes-scheadule.component';
import { DocentesAbsencesComponent } from './docentes-absences/docentes-absences.component';
import { DocentesEvaluationComponent } from './docentes-evaluation/docentes-evaluation.component';

@NgModule({
  declarations: [DocentesFormComponent, DocentesSearchComponent, DocentesScheaduleComponent, DocentesAbsencesComponent, DocentesEvaluationComponent],
  imports: [
    CommonModule,
    DocentesRoutingModule
  ]
})
export class DocentesModule { }
