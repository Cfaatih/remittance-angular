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
import { LoginInterceptor } from './login.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomerModule,
    RemittanceModule, 
    UsersModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:LoginInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
