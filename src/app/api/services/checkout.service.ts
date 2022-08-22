/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class CheckoutService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCardVisitCardIdGet
   */
  static readonly ApiCardVisitCardIdGetPath = '/api/card/visit/{card_id}';

  /**
   * Show specified Card and related Persons.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * Endpoint shows the specified card, the associated people and the limitation_state.
   * The limitation_state shows for the persons the limit for a productType and how
   * many of them have already been used by a person
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCardVisitCardIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCardVisitCardIdGet$Response(params: {

    /**
     * The ID of the card.
     */
    card_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CheckoutService.ApiCardVisitCardIdGetPath, 'get');
    if (params) {
      rb.path('card_id', params.card_id, {});
      rb.header('Authorization', params.Authorization, {});
      rb.header('Content-Type', params['Content-Type'], {});
      rb.header('Accept', params.Accept, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Show specified Card and related Persons.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * Endpoint shows the specified card, the associated people and the limitation_state.
   * The limitation_state shows for the persons the limit for a productType and how
   * many of them have already been used by a person
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCardVisitCardIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCardVisitCardIdGet(params: {

    /**
     * The ID of the card.
     */
    card_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiCardVisitCardIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCardVisitCardIdPost
   */
  static readonly ApiCardVisitCardIdPostPath = '/api/card/visit/{card_id}';

  /**
   * Create new Visit, LineItems.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * Endpoint creates a new Visit entry and stores the submitted lineItems
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCardVisitCardIdPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCardVisitCardIdPost$Response(params: {

    /**
     * The ID of the card.
     */
    card_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body?: {
'lineItems'?: Array<{

/**
 * ID of the person the lineItem is for.
 */
'person_id': string;

/**
 * ID of the product_type of the lineItem.
 */
'product_type_id': string;

/**
 * The amount of purchased lineItems of the same product_type. Must be at least 1.
 */
'amount': number;
}>;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CheckoutService.ApiCardVisitCardIdPostPath, 'post');
    if (params) {
      rb.path('card_id', params.card_id, {});
      rb.header('Authorization', params.Authorization, {});
      rb.header('Content-Type', params['Content-Type'], {});
      rb.header('Accept', params.Accept, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Create new Visit, LineItems.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * Endpoint creates a new Visit entry and stores the submitted lineItems
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCardVisitCardIdPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCardVisitCardIdPost(params: {

    /**
     * The ID of the card.
     */
    card_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body?: {
'lineItems'?: Array<{

/**
 * ID of the person the lineItem is for.
 */
'person_id': string;

/**
 * ID of the product_type of the lineItem.
 */
'product_type_id': string;

/**
 * The amount of purchased lineItems of the same product_type. Must be at least 1.
 */
'amount': number;
}>;
}
  }): Observable<void> {

    return this.apiCardVisitCardIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
