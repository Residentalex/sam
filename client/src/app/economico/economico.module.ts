import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomicoRoutingModule } from './economico-routing.module';
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

@NgModule({
  declarations: [EconomicoConceptsComponent, EconomicoPaymentsPlansComponent, EconomicoPaymentsComponent, EconomicoIncomesComponent, EconomicoExpensesComponent, EconomicoCashSummaryComponent, EconomicoAccountsComponent, EconomicoDocumentsSearchComponent, EconomicoDocumentsCancelComponent, EconomicoInventoryComponent],
  imports: [
    CommonModule,
    EconomicoRoutingModule
  ]
})
export class EconomicoModule { }
