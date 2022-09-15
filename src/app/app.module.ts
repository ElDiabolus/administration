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
import { ShopListComponent } from './page/organization/shop-list/shop-list.component';
import { ShopEditComponent } from './page/organization/shop-edit/shop-edit.component';
import { EntityComboBoxComponent } from './elements/standard-form/renderer/entity-combo-box/entity-combo-box.component';
import { UserListComponent } from './page/organization/user-list/user-list.component';
import { UserEditComponent } from './page/organization/user-edit/user-edit.component';
import { OpeningHoursRendererComponent } from './elements/standard-form/renderer/opening-hours-renderer/opening-hours-renderer.component';
import { UserRoleRendererComponent } from './elements/standard-form/renderer/user-role-renderer/user-role-renderer.component';
import { VisitListComponent } from './page/visit/visit-list/visit-list.component';
import { VisitEditComponent } from './page/visit/visit-edit/visit-edit.component';
import { LineItemListComponent } from './page/visit/line-item-list/line-item-list.component';
import { LineItemEditComponent } from './page/visit/line-item-edit/line-item-edit.component';
import { ReservationListComponent } from './page/reservation/reservation-list/reservation-list.component';
import { ReservationEditComponent } from './page/reservation/reservation-edit/reservation-edit.component';
import { DateRendererComponent } from './elements/standard-list/renderer/date-renderer/date-renderer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { IconRendererComponent } from './elements/standard-list/renderer/icon-renderer/icon-renderer.component';
import { GenderSelectRendererComponent } from './elements/standard-form/renderer/gender-select-renderer/gender-select-renderer.component';
import { StaticSelectRendererComponent } from './elements/standard-form/renderer/static-select-renderer/static-select-renderer.component';
import { GenderRendererComponent } from './elements/standard-list/renderer/gender-renderer/gender-renderer.component';

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
        ShopListComponent,
        ShopEditComponent,
        EntityComboBoxComponent,
        UserListComponent,
        UserEditComponent,
        OpeningHoursRendererComponent,
        UserRoleRendererComponent,
        VisitListComponent,
        VisitEditComponent,
        LineItemListComponent,
        LineItemEditComponent,
        ReservationListComponent,
        ReservationEditComponent,
        DateRendererComponent,
        IconRendererComponent,
        GenderSelectRendererComponent,
        StaticSelectRendererComponent,
        GenderRendererComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatTableModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => EntityComboBoxComponent), multi: true },
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => OpeningHoursRendererComponent), multi: true },
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StaticSelectRendererComponent), multi: true },
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => UserRoleRendererComponent), multi: true },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
