import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { ShowCustomerComponent } from './show-customer/show-customer.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AllCustomersComponent,
    ShowCustomerComponent,
    RegisterCustomerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CustomerModule { }
