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
export class ReservationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiReservationGet
   */
  static readonly ApiReservationGetPath = '/api/reservation';

  /**
   * List all Reservations.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationGet$Response(params?: {

    /**
     * Card.
     */
    card_id?: string;

    /**
     * Shop.
     */
    shop_id?: string;
    time?: {
};

    /**
     * Time is after this date. Must be a valid date.
     */
    'time.0'?: string;

    /**
     * Time is before this date. Must be a valid date. This field is required when &lt;code&gt;time.0&lt;/code&gt; is present.
     */
    'time.1'?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;card_id&lt;/code&gt;, &lt;code&gt;shop_id&lt;/code&gt;, or &lt;code&gt;time&lt;/code&gt;.
     */
    sort?: string;

    /**
     * Sort ascending or descending. Must be one of &lt;code&gt;asc&lt;/code&gt; or &lt;code&gt;desc&lt;/code&gt;.
     */
    order?: string;

    /**
     * Page to load.
     */
    page?: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationService.ApiReservationGetPath, 'get');
    if (params) {
      rb.query('card_id', params.card_id, {});
      rb.query('shop_id', params.shop_id, {});
      rb.query('time', params.time, {});
      rb.query('time.0', params['time.0'], {});
      rb.query('time.1', params['time.1'], {});
      rb.query('sort', params.sort, {});
      rb.query('order', params.order, {});
      rb.query('page', params.page, {});
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
   * List all Reservations.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationGet(params?: {

    /**
     * Card.
     */
    card_id?: string;

    /**
     * Shop.
     */
    shop_id?: string;
    time?: {
};

    /**
     * Time is after this date. Must be a valid date.
     */
    'time.0'?: string;

    /**
     * Time is before this date. Must be a valid date. This field is required when &lt;code&gt;time.0&lt;/code&gt; is present.
     */
    'time.1'?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;card_id&lt;/code&gt;, &lt;code&gt;shop_id&lt;/code&gt;, or &lt;code&gt;time&lt;/code&gt;.
     */
    sort?: string;

    /**
     * Sort ascending or descending. Must be one of &lt;code&gt;asc&lt;/code&gt; or &lt;code&gt;desc&lt;/code&gt;.
     */
    order?: string;

    /**
     * Page to load.
     */
    page?: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiReservationGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiReservationPost
   */
  static readonly ApiReservationPostPath = '/api/reservation';

  /**
   * Create new Reservation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiReservationPost$Response(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the card the reservation is attached to.
 */
'card_id': string;

/**
 * ID of the shop the reservation is for.
 */
'shop_id': string;

/**
 * Date and Time for the reservation. Must be a valid date.
 */
'time': string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationService.ApiReservationPostPath, 'post');
    if (params) {
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
   * Create new Reservation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiReservationPost(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the card the reservation is attached to.
 */
'card_id': string;

/**
 * ID of the shop the reservation is for.
 */
'shop_id': string;

/**
 * Date and Time for the reservation. Must be a valid date.
 */
'time': string;
}
  }): Observable<void> {

    return this.apiReservationPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiReservationIdGet
   */
  static readonly ApiReservationIdGetPath = '/api/reservation/{id}';

  /**
   * Show specified Reservation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationIdGet$Response(params: {

    /**
     * The ID of the reservation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationService.ApiReservationIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * Show specified Reservation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationIdGet(params: {

    /**
     * The ID of the reservation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiReservationIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiReservationIdPut
   */
  static readonly ApiReservationIdPutPath = '/api/reservation/{id}';

  /**
   * Update specified Reservation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiReservationIdPut$Response(params: {

    /**
     * The ID of the reservation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the card the reservation is attached to.
 */
'card_id': string;

/**
 * ID of the shop the reservation is for.
 */
'shop_id': string;

/**
 * Date and Time for the reservation. Must be a valid date.
 */
'time': string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationService.ApiReservationIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
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
   * Update specified Reservation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiReservationIdPut(params: {

    /**
     * The ID of the reservation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the card the reservation is attached to.
 */
'card_id': string;

/**
 * ID of the shop the reservation is for.
 */
'shop_id': string;

/**
 * Date and Time for the reservation. Must be a valid date.
 */
'time': string;
}
  }): Observable<void> {

    return this.apiReservationIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiReservationIdDelete
   */
  static readonly ApiReservationIdDeletePath = '/api/reservation/{id}';

  /**
   * Delete specified Reservation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationIdDelete$Response(params: {

    /**
     * The ID of the reservation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationService.ApiReservationIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * Delete specified Reservation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReservationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationIdDelete(params: {

    /**
     * The ID of the reservation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiReservationIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
