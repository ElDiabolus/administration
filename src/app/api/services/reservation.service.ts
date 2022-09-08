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
   * Path part for operation apiAdminReservationGet
   */
  static readonly ApiAdminReservationGetPath = '/api/admin/reservation';

  /**
   * List all Reservations.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminReservationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminReservationGet$Response(params?: {

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

    /**
     * Items per page. Must be at least 10. Must not be greater than 500.
     */
    limit?: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'items'?: Array<{
}>;
'meta'?: {
};
'links'?: {
};
}>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationService.ApiAdminReservationGetPath, 'get');
    if (params) {
      rb.query('card_id', params.card_id, {});
      rb.query('shop_id', params.shop_id, {});
      rb.query('time', params.time, {});
      rb.query('time.0', params['time.0'], {});
      rb.query('time.1', params['time.1'], {});
      rb.query('sort', params.sort, {});
      rb.query('order', params.order, {});
      rb.query('page', params.page, {});
      rb.query('limit', params.limit, {});
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
        return r as StrictHttpResponse<{
        'items'?: Array<{
        }>;
        'meta'?: {
        };
        'links'?: {
        };
        }>;
      })
    );
  }

  /**
   * List all Reservations.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminReservationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminReservationGet(params?: {

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

    /**
     * Items per page. Must be at least 10. Must not be greater than 500.
     */
    limit?: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'items'?: Array<{
}>;
'meta'?: {
};
'links'?: {
};
}> {

    return this.apiAdminReservationGet$Response(params).pipe(
      map((r: StrictHttpResponse<{
'items'?: Array<{
}>;
'meta'?: {
};
'links'?: {
};
}>) => r.body as {
'items'?: Array<{
}>;
'meta'?: {
};
'links'?: {
};
})
    );
  }

  /**
   * Path part for operation apiAdminReservationPost
   */
  static readonly ApiAdminReservationPostPath = '/api/admin/reservation';

  /**
   * Create new Reservation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminReservationPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminReservationPost$Response(params: {
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

    const rb = new RequestBuilder(this.rootUrl, ReservationService.ApiAdminReservationPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiAdminReservationPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminReservationPost(params: {
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

    return this.apiAdminReservationPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminReservationIdGet
   */
  static readonly ApiAdminReservationIdGetPath = '/api/admin/reservation/{id}';

  /**
   * Show specified Reservation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminReservationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminReservationIdGet$Response(params: {

    /**
     * The ID of the reservation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'id'?: number;
'card_id'?: number;
'shop_id'?: number;
'card'?: {
};
'shop'?: {
};
'time'?: string;
'created_at'?: string;
'updated_at'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationService.ApiAdminReservationIdGetPath, 'get');
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
        return r as StrictHttpResponse<{
        'id'?: number;
        'card_id'?: number;
        'shop_id'?: number;
        'card'?: {
        };
        'shop'?: {
        };
        'time'?: string;
        'created_at'?: string;
        'updated_at'?: string;
        }>;
      })
    );
  }

  /**
   * Show specified Reservation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminReservationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminReservationIdGet(params: {

    /**
     * The ID of the reservation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'id'?: number;
'card_id'?: number;
'shop_id'?: number;
'card'?: {
};
'shop'?: {
};
'time'?: string;
'created_at'?: string;
'updated_at'?: string;
}> {

    return this.apiAdminReservationIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<{
'id'?: number;
'card_id'?: number;
'shop_id'?: number;
'card'?: {
};
'shop'?: {
};
'time'?: string;
'created_at'?: string;
'updated_at'?: string;
}>) => r.body as {
'id'?: number;
'card_id'?: number;
'shop_id'?: number;
'card'?: {
};
'shop'?: {
};
'time'?: string;
'created_at'?: string;
'updated_at'?: string;
})
    );
  }

  /**
   * Path part for operation apiAdminReservationIdPut
   */
  static readonly ApiAdminReservationIdPutPath = '/api/admin/reservation/{id}';

  /**
   * Update specified Reservation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminReservationIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminReservationIdPut$Response(params: {

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

    const rb = new RequestBuilder(this.rootUrl, ReservationService.ApiAdminReservationIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiAdminReservationIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminReservationIdPut(params: {

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

    return this.apiAdminReservationIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminReservationIdDelete
   */
  static readonly ApiAdminReservationIdDeletePath = '/api/admin/reservation/{id}';

  /**
   * Delete specified Reservation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminReservationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminReservationIdDelete$Response(params: {

    /**
     * The ID of the reservation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'success'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, ReservationService.ApiAdminReservationIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<{
        'success'?: boolean;
        }>;
      })
    );
  }

  /**
   * Delete specified Reservation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminReservationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminReservationIdDelete(params: {

    /**
     * The ID of the reservation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'success'?: boolean;
}> {

    return this.apiAdminReservationIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
}>) => r.body as {
'success'?: boolean;
})
    );
  }

}
