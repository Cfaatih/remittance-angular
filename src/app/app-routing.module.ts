import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

import { AllCustomersComponent } from './customer/all-customers/all-customers.component';
import { RegisterCustomerComponent } from './customer/register-customer/register-customer.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';


import { HomeComponent } from './home/home.component';
import { SendMoneyComponent } from './remittance/send-money/send-money.component';
import { ShowAllRemittancesComponent } from './remittance/show-all-remittances/show-all-remittances.component';
import { ShowRemittanceComponent } from './remittance/show-remittance/show-remittance.component';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { GetUserComponent } from './users/get-user/get-user.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:LoginComponent},
   {path:'sidebar', component:SidebarComponent},
  
  {path:'registerCustomer', component:RegisterCustomerComponent},
  {path:'allCustomers', component:AllCustomersComponent},
  {path:'showCustomer', component:ShowCustomerComponent},
  {path:'sendMoney', component:SendMoneyComponent},
  {path:'allRemittances', component:ShowAllRemittancesComponent},
  {path:'showRemittance', component:ShowRemittanceComponent},
  {path:'allUsers', component:AllUsersComponent},
  {path:'getUser', component:GetUserComponent},
  {path:'createUser', component:CreateUserComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
