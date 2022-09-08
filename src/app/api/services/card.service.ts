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
export class CardService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminCardGet
   */
  static readonly ApiAdminCardGetPath = '/api/admin/card';

  /**
   * List all Cards.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminCardGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminCardGet$Response(params?: {

    /**
     * Last name contains.
     */
    last_name?: string;

    /**
     * First name contains.
     */
    first_name?: string;

    /**
     * Street contains.
     */
    street?: string;

    /**
     * Postcode contains.
     */
    postcode?: string;

    /**
     * City contains.
     */
    city?: string;
    valid_from?: {
};

    /**
     * Valid from is after this date. Must be a valid date.
     */
    'valid_from.0'?: string;

    /**
     * Valid from is before this date. Must be a valid date. This field is required when &lt;code&gt;valid_from.0&lt;/code&gt; is present.
     */
    'valid_from.1'?: string;
    valid_until?: {
};

    /**
     * Valid until is after this date. Must be a valid date.
     */
    'valid_until.0'?: string;

    /**
     * Valid until is before this date. Must be a valid date. This field is required when &lt;code&gt;valid_until.0&lt;/code&gt; is present.
     */
    'valid_until.1'?: string;

    /**
     * Comment contains.
     */
    comment?: string;

    /**
     * Created by user_id.
     */
    creator_id?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;last_name&lt;/code&gt;, &lt;code&gt;first_name&lt;/code&gt;, &lt;code&gt;street&lt;/code&gt;, &lt;code&gt;postcode&lt;/code&gt;, &lt;code&gt;city&lt;/code&gt;, &lt;code&gt;valid_from&lt;/code&gt;, &lt;code&gt;valid_until&lt;/code&gt;, or &lt;code&gt;creator_id&lt;/code&gt;.
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

    const rb = new RequestBuilder(this.rootUrl, CardService.ApiAdminCardGetPath, 'get');
    if (params) {
      rb.query('last_name', params.last_name, {});
      rb.query('first_name', params.first_name, {});
      rb.query('street', params.street, {});
      rb.query('postcode', params.postcode, {});
      rb.query('city', params.city, {});
      rb.query('valid_from', params.valid_from, {});
      rb.query('valid_from.0', params['valid_from.0'], {});
      rb.query('valid_from.1', params['valid_from.1'], {});
      rb.query('valid_until', params.valid_until, {});
      rb.query('valid_until.0', params['valid_until.0'], {});
      rb.query('valid_until.1', params['valid_until.1'], {});
      rb.query('comment', params.comment, {});
      rb.query('creator_id', params.creator_id, {});
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
   * List all Cards.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminCardGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminCardGet(params?: {

    /**
     * Last name contains.
     */
    last_name?: string;

    /**
     * First name contains.
     */
    first_name?: string;

    /**
     * Street contains.
     */
    street?: string;

    /**
     * Postcode contains.
     */
    postcode?: string;

    /**
     * City contains.
     */
    city?: string;
    valid_from?: {
};

    /**
     * Valid from is after this date. Must be a valid date.
     */
    'valid_from.0'?: string;

    /**
     * Valid from is before this date. Must be a valid date. This field is required when &lt;code&gt;valid_from.0&lt;/code&gt; is present.
     */
    'valid_from.1'?: string;
    valid_until?: {
};

    /**
     * Valid until is after this date. Must be a valid date.
     */
    'valid_until.0'?: string;

    /**
     * Valid until is before this date. Must be a valid date. This field is required when &lt;code&gt;valid_until.0&lt;/code&gt; is present.
     */
    'valid_until.1'?: string;

    /**
     * Comment contains.
     */
    comment?: string;

    /**
     * Created by user_id.
     */
    creator_id?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;last_name&lt;/code&gt;, &lt;code&gt;first_name&lt;/code&gt;, &lt;code&gt;street&lt;/code&gt;, &lt;code&gt;postcode&lt;/code&gt;, &lt;code&gt;city&lt;/code&gt;, &lt;code&gt;valid_from&lt;/code&gt;, &lt;code&gt;valid_until&lt;/code&gt;, or &lt;code&gt;creator_id&lt;/code&gt;.
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

    return this.apiAdminCardGet$Response(params).pipe(
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
   * Path part for operation apiAdminCardPost
   */
  static readonly ApiAdminCardPostPath = '/api/admin/card';

  /**
   * Create new Card.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminCardPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminCardPost$Response(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Last name of the cardholder.
 */
'last_name': string;

/**
 * First name of the cardholder.
 */
'first_name': string;

/**
 * Street where the cardholder is located.
 */
'street'?: string;

/**
 * Postcode where the cardholder is located.
 */
'postcode'?: string;

/**
 * City where the cardholder is located.
 */
'city'?: string;

/**
 * Date and time of the start of validity of the card. Must be a valid date.
 */
'valid_from': string;

/**
 * Date and time of the expiry of the card. Must be a valid date.
 */
'valid_until': string;

/**
 * Additional Comment for the card.
 */
'comment'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CardService.ApiAdminCardPostPath, 'post');
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
   * Create new Card.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminCardPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminCardPost(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Last name of the cardholder.
 */
'last_name': string;

/**
 * First name of the cardholder.
 */
'first_name': string;

/**
 * Street where the cardholder is located.
 */
'street'?: string;

/**
 * Postcode where the cardholder is located.
 */
'postcode'?: string;

/**
 * City where the cardholder is located.
 */
'city'?: string;

/**
 * Date and time of the start of validity of the card. Must be a valid date.
 */
'valid_from': string;

/**
 * Date and time of the expiry of the card. Must be a valid date.
 */
'valid_until': string;

/**
 * Additional Comment for the card.
 */
'comment'?: string;
}
  }): Observable<void> {

    return this.apiAdminCardPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminCardIdGet
   */
  static readonly ApiAdminCardIdGetPath = '/api/admin/card/{id}';

  /**
   * Show specified Card.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminCardIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminCardIdGet$Response(params: {

    /**
     * The ID of the card.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'id'?: number;
'last_name'?: string;
'first_name'?: string;
'street'?: string;
'postcode'?: string;
'city'?: string;
'valid_from'?: string;
'valid_until'?: string;
'creator_id'?: number;
'comment'?: string;
'created_at'?: string;
'updated_at'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, CardService.ApiAdminCardIdGetPath, 'get');
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
        'last_name'?: string;
        'first_name'?: string;
        'street'?: string;
        'postcode'?: string;
        'city'?: string;
        'valid_from'?: string;
        'valid_until'?: string;
        'creator_id'?: number;
        'comment'?: string;
        'created_at'?: string;
        'updated_at'?: string;
        }>;
      })
    );
  }

  /**
   * Show specified Card.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminCardIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminCardIdGet(params: {

    /**
     * The ID of the card.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'id'?: number;
'last_name'?: string;
'first_name'?: string;
'street'?: string;
'postcode'?: string;
'city'?: string;
'valid_from'?: string;
'valid_until'?: string;
'creator_id'?: number;
'comment'?: string;
'created_at'?: string;
'updated_at'?: string;
}> {

    return this.apiAdminCardIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<{
'id'?: number;
'last_name'?: string;
'first_name'?: string;
'street'?: string;
'postcode'?: string;
'city'?: string;
'valid_from'?: string;
'valid_until'?: string;
'creator_id'?: number;
'comment'?: string;
'created_at'?: string;
'updated_at'?: string;
}>) => r.body as {
'id'?: number;
'last_name'?: string;
'first_name'?: string;
'street'?: string;
'postcode'?: string;
'city'?: string;
'valid_from'?: string;
'valid_until'?: string;
'creator_id'?: number;
'comment'?: string;
'created_at'?: string;
'updated_at'?: string;
})
    );
  }

  /**
   * Path part for operation apiAdminCardIdPut
   */
  static readonly ApiAdminCardIdPutPath = '/api/admin/card/{id}';

  /**
   * Update specified Card.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminCardIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminCardIdPut$Response(params: {

    /**
     * The ID of the card.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Last name of the cardholder.
 */
'last_name': string;

/**
 * First name of the cardholder.
 */
'first_name': string;

/**
 * Street where the cardholder is located.
 */
'street'?: string;

/**
 * Postcode where the cardholder is located.
 */
'postcode'?: string;

/**
 * City where the cardholder is located.
 */
'city'?: string;

/**
 * Date and time of the start of validity of the card. Must be a valid date.
 */
'valid_from': string;

/**
 * Date and time of the expiry of the card. Must be a valid date.
 */
'valid_until': string;

/**
 * Additional Comment for the card.
 */
'comment'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CardService.ApiAdminCardIdPutPath, 'put');
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
   * Update specified Card.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminCardIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminCardIdPut(params: {

    /**
     * The ID of the card.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Last name of the cardholder.
 */
'last_name': string;

/**
 * First name of the cardholder.
 */
'first_name': string;

/**
 * Street where the cardholder is located.
 */
'street'?: string;

/**
 * Postcode where the cardholder is located.
 */
'postcode'?: string;

/**
 * City where the cardholder is located.
 */
'city'?: string;

/**
 * Date and time of the start of validity of the card. Must be a valid date.
 */
'valid_from': string;

/**
 * Date and time of the expiry of the card. Must be a valid date.
 */
'valid_until': string;

/**
 * Additional Comment for the card.
 */
'comment'?: string;
}
  }): Observable<void> {

    return this.apiAdminCardIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminCardIdDelete
   */
  static readonly ApiAdminCardIdDeletePath = '/api/admin/card/{id}';

  /**
   * Delete specified Card.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminCardIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminCardIdDelete$Response(params: {

    /**
     * The ID of the card.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'success'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, CardService.ApiAdminCardIdDeletePath, 'delete');
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
   * Delete specified Card.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminCardIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminCardIdDelete(params: {

    /**
     * The ID of the card.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'success'?: boolean;
}> {

    return this.apiAdminCardIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
}>) => r.body as {
'success'?: boolean;
})
    );
  }

}
