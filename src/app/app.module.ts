import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationListComponent } from './page/organization/organization-list/organization-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./http-interceptors/auth-interceptor";
import {LoginComponent} from "./page/login/login.component";
import {FormsModule} from "@angular/forms";
import {CookieService} from "ng2-cookies";
import { OrganizationEditComponent } from './page/organization/organization-edit/organization-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationListComponent,
    LoginComponent,
    OrganizationEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
