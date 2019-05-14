import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EconomicoConceptsComponent } from './economico-concepts/economico-concepts.component';
import { EconomicoPaymentsPlansComponent } from './economico-payments-plans/economico-payments-plans.component';
import { EconomicoPaymentsComponent } from './economico-payments/economico-payments.component';
import { EconomicoIncomesComponent } from './economico-incomes/economico-incomes.component';
import { EconomicoExpensesComponent } from './economico-expenses/economico-expenses.component';
import { EconomicoCashSummaryComponent } from './economico-cash-summary/economico-cash-summary.component';
import { EconomicoAccountsComponent } from './economico-accounts/economico-accounts.component';
import { EconomicoDocumentsSearchComponent } from './economico-documents-search/economico-documents-search.component';
import { EconomicoDocumentsCancelComponent } from './economico-documents-cancel/economico-documents-cancel.component';
import { EconomicoInventoryComponent } from './economico-inventory/economico-inventory.component';

const routes: Routes = [
  { path: 'economico-concepts', component: EconomicoConceptsComponent, data: { breadcrumb: 'Conceptos de Pago' } },
  { path: 'economico-payments-plans', component: EconomicoPaymentsPlansComponent, data: { breadcrumb: 'Planes de Pago' } },
  { path: 'economico-payments', component: EconomicoPaymentsComponent },
  { path: 'economico-incomes', component: EconomicoIncomesComponent, data: { breadcrumb: 'Ingresos' } },
  { path: 'economico-expenses', component: EconomicoExpensesComponent, data: { breadcrumb: 'Egresos' } },
  { path: 'economico-cash-summary', component: EconomicoCashSummaryComponent, data: { breadcrumb: 'Resumen de Caja' } },
  { path: 'economico-accounts', component: EconomicoAccountsComponent, data: { breadcrumb: 'Estado de Cuentas' } },
  { path: 'economico-documents-search', component: EconomicoDocumentsSearchComponent, data: { breadcrumb: 'Consulta de Documentos' } },
  { path: 'economico-documents-cancel', component: EconomicoDocumentsCancelComponent, data: { breadcrumb: 'Anulación de Dcoumentos' } },
  { path: 'economico-inventory', component: EconomicoInventoryComponent, data: { breadcrumb: 'Inventario' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomicoRoutingModule { }
