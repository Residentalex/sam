import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluacionRoutingModule } from './evaluacion-routing.module';
import { EvaluacionRecordComponent } from './evaluacion-record/evaluacion-record.component';
import { EvaluacionMethodComponent } from './evaluacion-method/evaluacion-method.component';

@NgModule({
  declarations: [EvaluacionRecordComponent, EvaluacionMethodComponent],
  imports: [
    CommonModule,
    EvaluacionRoutingModule
  ]
})
export class EvaluacionModule { }
