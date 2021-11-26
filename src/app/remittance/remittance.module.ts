import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMoneyComponent } from './send-money/send-money.component';
import { ShowAllRemittancesComponent } from './show-all-remittances/show-all-remittances.component';
import { ShowRemittanceComponent } from './show-remittance/show-remittance.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SendMoneyComponent,
    ShowAllRemittancesComponent,
    ShowRemittanceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RemittanceModule { }
