import { BrowserModule } from '@angular/platform-browser';
import {forwardRef, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationListComponent } from './page/organization/organization-list/organization-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./http-interceptors/auth-interceptor";
import {LoginComponent} from "./page/login/login.component";
import {FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {CookieService} from "ng2-cookies";
import { OrganizationEditComponent } from './page/organization/organization-edit/organization-edit.component';
import { CardListComponent } from './page/card/card-list/card-list.component';
import { CardEditComponent } from './page/card/card-edit/card-edit.component';
import { StandardListComponent } from './elements/standard-list/standard-list.component';
import { StringRendererComponent } from './elements/standard-list/renderer/string-renderer/string-renderer.component';
import { MailRendererComponent } from './elements/standard-list/renderer/mail-renderer/mail-renderer.component';
import { LimitationListComponent } from './page/limitation/limitation-list/limitation-list.component';
import { LimitationEditComponent } from './page/limitation/limitation-edit/limitation-edit.component';
import { StandardFormComponent } from './elements/standard-form/standard-form.component';
import { LimitationSetEditComponent } from './page/limitation/limitation-set-edit/limitation-set-edit.component';
import { LimitationSetListComponent } from './page/limitation/limitation-set-list/limitation-set-list.component';
import { PersonListComponent } from './page/card/person-list/person-list.component';
import { PersonEditComponent } from './page/card/person-edit/person-edit.component';
import { ProductTypeListComponent } from './page/product-type/product-type-list/product-type-list.component';
import { ProductTypeEditComponent } from './page/product-type/product-type-edit/product-type-edit.component';
import { CardPdfRendererComponent } from './elements/standard-form/renderer/card-pdf-renderer/card-pdf-renderer.component';
import { SubEntityListComponent } from './elements/sub-entity-list/sub-entity-list.component';
import { ShopListComponent } from './page/organization/shop-list/shop-list.component';
import { ShopEditComponent } from './page/organization/shop-edit/shop-edit.component';
import { EntityComboBoxComponent } from './elements/standard-form/renderer/entity-combo-box/entity-combo-box.component';
import { UserListComponent } from './page/organization/user-list/user-list.component';
import { UserEditComponent } from './page/organization/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationListComponent,
    LoginComponent,
    OrganizationEditComponent,
    CardListComponent,
    CardEditComponent,
    StandardListComponent,
    StringRendererComponent,
    MailRendererComponent,
    LimitationListComponent,
    LimitationEditComponent,
    StandardFormComponent,
    LimitationSetEditComponent,
    LimitationSetListComponent,
    PersonListComponent,
    PersonEditComponent,
    ProductTypeListComponent,
    ProductTypeEditComponent,
    CardPdfRendererComponent,
    SubEntityListComponent,
    ShopListComponent,
    ShopEditComponent,
    EntityComboBoxComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => EntityComboBoxComponent), multi: true },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
