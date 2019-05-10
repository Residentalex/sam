import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DocentesRoutingModule } from './docentes-routing.module';
import { DocentesFormComponent } from './docentes-form/docentes-form.component';
import { DocentesSearchComponent } from './docentes-search/docentes-search.component';
import { DocentesScheaduleComponent } from './docentes-scheadule/docentes-scheadule.component';
import { DocentesAbsencesComponent } from './docentes-absences/docentes-absences.component';
import { DocentesEvaluationComponent } from './docentes-evaluation/docentes-evaluation.component';
import { DocentesService } from './docentes.service';

@NgModule({
  declarations: [
    DocentesFormComponent,
    DocentesSearchComponent,
    DocentesScheaduleComponent,
    DocentesAbsencesComponent,
    DocentesEvaluationComponent
  ],
  imports: [
    CommonModule,
    DocentesRoutingModule,
    HttpClientModule
  ],
  providers: [
    DocentesService
  ]
})
export class DocentesModule { }
