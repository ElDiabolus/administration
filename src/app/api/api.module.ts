/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ReservationService } from './services/reservation.service';
import { OrganizationService } from './services/organization.service';
import { PasswordResetService } from './services/password-reset.service';
import { ShopService } from './services/shop.service';
import { PersonService } from './services/person.service';
import { ProductTypeService } from './services/product-type.service';
import { LineItemService } from './services/line-item.service';
import { UserService } from './services/user.service';
import { CheckoutService } from './services/checkout.service';
import { CardService } from './services/card.service';
import { ScheduleService } from './services/schedule.service';
import { LimitationService } from './services/limitation.service';
import { PdfService } from './services/pdf.service';
import { VisitService } from './services/visit.service';
import { LimitationSetService } from './services/limitation-set.service';
import { AuthenticationService } from './services/authentication.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ReservationService,
    OrganizationService,
    PasswordResetService,
    ShopService,
    PersonService,
    ProductTypeService,
    LineItemService,
    UserService,
    CheckoutService,
    CardService,
    ScheduleService,
    LimitationService,
    PdfService,
    VisitService,
    LimitationSetService,
    AuthenticationService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
