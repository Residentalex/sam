import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluacionRoutingModule } from './evaluacion-routing.module';
import { EvaluacionMethodComponent } from './evaluacion-method/evaluacion-method.component';
import { EvaluacionRecordComponent } from './evaluacion-record/evaluacion-record.component';

@NgModule({
  declarations: [EvaluacionMethodComponent, EvaluacionRecordComponent],
  imports: [
    CommonModule,
    EvaluacionRoutingModule
  ]
})
export class EvaluacionModule { }
