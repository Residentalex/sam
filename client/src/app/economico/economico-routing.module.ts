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
  {path: 'economico-concepts', component: EconomicoConceptsComponent, data: {title: 'Conceptos de Pago'}},
  {path: 'economico-payments-plans', component: EconomicoPaymentsPlansComponent, data: {title: 'Planes de Pago'}},
  {path: 'economico-payments', component: EconomicoPaymentsComponent, data: {title: 'Pagos'}},
  {path: 'economico-incomes', component: EconomicoIncomesComponent, data: {title: 'Ingresos'}},
  {path: 'economico-expenses', component: EconomicoExpensesComponent, data: {title: 'Egresos'}},
  {path: 'economico-cash-summary', component: EconomicoCashSummaryComponent, data: {title: 'Resumen de Caja'}},
  {path: 'economico-accounts', component: EconomicoAccountsComponent, data: {title: 'Estado de Cuenta'}},
  {path: 'economico-documents-search', component: EconomicoDocumentsSearchComponent, data: {title: 'Consulta de Dcoumentos'}},
  {path: 'economico-documents-cancel', component: EconomicoDocumentsCancelComponent, data: {title: 'Anulación de Dcouemntos'}},
  {path: 'economico-inventory', component: EconomicoInventoryComponent, data: {title: 'Inventario'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomicoRoutingModule { }
