import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', loadChildren: './dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Home' } },
  { path: 'docentes', loadChildren: './docentes/docentes.module#DocentesModule', data: { breadcrumb: 'Docentes' } },
  { path: 'alumnos', loadChildren: './alumnos/alumnos.module#AlumnosModule', data: { breadcrumb: 'Alumnos' } },
  { path: 'evaluacion', loadChildren: './evaluacion/evaluacion.module#EvaluacionModule', data: { breadcrumb: 'Evaluación' } },
  { path: 'economico', loadChildren: './economico/economico.module#EconomicoModule', data: { breadcrumb: 'Economico' } },
  { path: 'reportes', loadChildren: './reportes/reportes.module#ReportesModule', data: { breadcrumb: 'Reportes' } },
  { path: 'configuracion', loadChildren: './configuracion/configuracion.module#ConfiguracionModule', data: { breadcrumb: 'Configuración' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
