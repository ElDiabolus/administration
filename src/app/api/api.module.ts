/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ScheduleService } from './services/schedule.service';
import { OrganizationService } from './services/organization.service';
import { PersonService } from './services/person.service';
import { UserService } from './services/user.service';
import { ProductTypeService } from './services/product-type.service';
import { ReservationService } from './services/reservation.service';
import { LineItemService } from './services/line-item.service';
import { VisitService } from './services/visit.service';
import { CheckoutService } from './services/checkout.service';
import { CardService } from './services/card.service';
import { ShopService } from './services/shop.service';
import { LimitationService } from './services/limitation.service';
import { PdfService } from './services/pdf.service';
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
    ScheduleService,
    OrganizationService,
    PersonService,
    UserService,
    ProductTypeService,
    ReservationService,
    LineItemService,
    VisitService,
    CheckoutService,
    CardService,
    ShopService,
    LimitationService,
    PdfService,
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
