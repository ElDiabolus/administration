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
export class LimitationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminLimitationLimitsGet
   */
  static readonly ApiAdminLimitationLimitsGetPath = '/api/admin/limitation/limits';

  /**
   * List all Limitation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationLimitsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationLimitsGet$Response(params?: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationService.ApiAdminLimitationLimitsGetPath, 'get');
    if (params) {
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
   * List all Limitation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationLimitsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationLimitsGet(params?: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminLimitationLimitsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationLimitsPost
   */
  static readonly ApiAdminLimitationLimitsPostPath = '/api/admin/limitation/limits';

  /**
   * Create new Limitation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationLimitsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationLimitsPost$Response(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the product type the limitation is attached to.
 */
'product_type_id': string;

/**
 * ID of the limitation set the limitation is attached to.
 */
'limitation_set_id': string;

/**
 * Number that determines the limit.
 */
'limit'?: number;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationService.ApiAdminLimitationLimitsPostPath, 'post');
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
   * Create new Limitation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationLimitsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationLimitsPost(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the product type the limitation is attached to.
 */
'product_type_id': string;

/**
 * ID of the limitation set the limitation is attached to.
 */
'limitation_set_id': string;

/**
 * Number that determines the limit.
 */
'limit'?: number;
}
  }): Observable<void> {

    return this.apiAdminLimitationLimitsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationLimitsLimitationIdGet
   */
  static readonly ApiAdminLimitationLimitsLimitationIdGetPath = '/api/admin/limitation/limits/{limitation_id}';

  /**
   * Show specified Limitation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationLimitsLimitationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationLimitsLimitationIdGet$Response(params: {

    /**
     * The ID of the limitation.
     */
    limitation_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationService.ApiAdminLimitationLimitsLimitationIdGetPath, 'get');
    if (params) {
      rb.path('limitation_id', params.limitation_id, {});
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
   * Show specified Limitation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationLimitsLimitationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationLimitsLimitationIdGet(params: {

    /**
     * The ID of the limitation.
     */
    limitation_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminLimitationLimitsLimitationIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationLimitsLimitationIdPut
   */
  static readonly ApiAdminLimitationLimitsLimitationIdPutPath = '/api/admin/limitation/limits/{limitation_id}';

  /**
   * Update specified Limitation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationLimitsLimitationIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationLimitsLimitationIdPut$Response(params: {

    /**
     * The ID of the limitation.
     */
    limitation_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the product type the limitation is attached to.
 */
'product_type_id': string;

/**
 * ID of the limitation set the limitation is attached to.
 */
'limitation_set_id': string;

/**
 * Number that determines the limit.
 */
'limit'?: number;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationService.ApiAdminLimitationLimitsLimitationIdPutPath, 'put');
    if (params) {
      rb.path('limitation_id', params.limitation_id, {});
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
   * Update specified Limitation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationLimitsLimitationIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationLimitsLimitationIdPut(params: {

    /**
     * The ID of the limitation.
     */
    limitation_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the product type the limitation is attached to.
 */
'product_type_id': string;

/**
 * ID of the limitation set the limitation is attached to.
 */
'limitation_set_id': string;

/**
 * Number that determines the limit.
 */
'limit'?: number;
}
  }): Observable<void> {

    return this.apiAdminLimitationLimitsLimitationIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationLimitsLimitationIdDelete
   */
  static readonly ApiAdminLimitationLimitsLimitationIdDeletePath = '/api/admin/limitation/limits/{limitation_id}';

  /**
   * Delete specified Limitation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationLimitsLimitationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationLimitsLimitationIdDelete$Response(params: {

    /**
     * The ID of the limitation.
     */
    limitation_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationService.ApiAdminLimitationLimitsLimitationIdDeletePath, 'delete');
    if (params) {
      rb.path('limitation_id', params.limitation_id, {});
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
   * Delete specified Limitation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationLimitsLimitationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationLimitsLimitationIdDelete(params: {

    /**
     * The ID of the limitation.
     */
    limitation_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminLimitationLimitsLimitationIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
