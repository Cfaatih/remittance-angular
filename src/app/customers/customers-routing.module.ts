import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomersComponent } from './customers.component';
import { GetCustomerComponent } from './get-customer/get-customer.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'registerCustomer', component: CreateCustomerComponent },
  { path: 'getCustomer', component: GetCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
