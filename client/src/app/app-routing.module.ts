import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', data: { title: 'Dashboard' } },
  { path: 'docentes', loadChildren: './docentes/docentes.module#DocentesModule', data: { title: 'Docentes' } },
  { path: 'alumnos', loadChildren: './alumnos/alumnos.module#AlumnosModule', data: { title: 'Alumnos' } },
  { path: 'evaluacion', loadChildren: './evaluacion/evaluacion.module#EvaluacionModule', data: { title: 'Evaluacion' } },
  { path: 'economico', loadChildren: './economico/economico.module#EconomicoModule', data: { title: 'Economico' } },
  { path: 'reportes', loadChildren: './reportes/reportes.module#ReportesModule', data: { title: 'Reportes' } },
  { path: 'configuracion', loadChildren: './configuracion/configuracion.module#ConfiguracionModule', data: { title: 'Configuracion' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
