import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportesListComponent } from './reportes-list/reportes-list.component';

const routes: Routes = [
  {path: '', component: ReportesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
