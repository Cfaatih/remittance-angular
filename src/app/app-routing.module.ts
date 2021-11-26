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
  
  {path:'home/registerCustomer', component:RegisterCustomerComponent},
  {path:'home/allCustomers', component:AllCustomersComponent},
  {path:'showCustomer', component:ShowCustomerComponent},
  {path:'home/sendMoney', component:SendMoneyComponent},
  {path:'home/allRemittances', component:ShowAllRemittancesComponent},
  {path:'home/showRemittance', component:ShowRemittanceComponent},
  {path:'home/allUsers', component:AllUsersComponent},
  {path:'home/getUser', component:GetUserComponent},
  {path:'home/createUser', component:CreateUserComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
