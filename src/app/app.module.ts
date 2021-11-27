import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { AuthenticationModule } from './authentication/authentication.module';

import { ReactiveFormsModule } from '@angular/forms';
import { CustomerModule } from './customer/customer.module';
import { RemittanceModule } from './remittance/remittance.module';
import { UsersModule } from './users/users.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginInterceptor } from './login.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomerModule,
    RemittanceModule, 
    UsersModule,
    DashboardModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:LoginInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
