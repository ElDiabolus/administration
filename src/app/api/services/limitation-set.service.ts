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
export class LimitationSetService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminLimitationSetsGet
   */
  static readonly ApiAdminLimitationSetsGetPath = '/api/admin/limitation/sets';

  /**
   * List all LimitationSets.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationSetsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetsGet$Response(params?: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationSetService.ApiAdminLimitationSetsGetPath, 'get');
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
   * List all LimitationSets.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationSetsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetsGet(params?: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminLimitationSetsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationSetsPost
   */
  static readonly ApiAdminLimitationSetsPostPath = '/api/admin/limitation/sets';

  /**
   * Create new LimitationSet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationSetsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationSetsPost$Response(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Name of the limitation set.
 */
'name': string;

/**
 * Date and time of the expiry of the limitation set. Must be a valid date.
 */
'valid_from': string;

/**
 * Date and time of the expiry of the limitation set. Must be a valid date.
 */
'valid_until'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationSetService.ApiAdminLimitationSetsPostPath, 'post');
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
   * Create new LimitationSet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationSetsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationSetsPost(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Name of the limitation set.
 */
'name': string;

/**
 * Date and time of the expiry of the limitation set. Must be a valid date.
 */
'valid_from': string;

/**
 * Date and time of the expiry of the limitation set. Must be a valid date.
 */
'valid_until'?: string;
}
  }): Observable<void> {

    return this.apiAdminLimitationSetsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationSetsLimitationSetIdGet
   */
  static readonly ApiAdminLimitationSetsLimitationSetIdGetPath = '/api/admin/limitation/sets/{limitationSet_id}';

  /**
   * Show specified LimitationSet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationSetsLimitationSetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetsLimitationSetIdGet$Response(params: {

    /**
     * The ID of the limitationSet.
     */
    limitationSet_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationSetService.ApiAdminLimitationSetsLimitationSetIdGetPath, 'get');
    if (params) {
      rb.path('limitationSet_id', params.limitationSet_id, {});
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
   * Show specified LimitationSet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationSetsLimitationSetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetsLimitationSetIdGet(params: {

    /**
     * The ID of the limitationSet.
     */
    limitationSet_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminLimitationSetsLimitationSetIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationSetsLimitationSetIdPut
   */
  static readonly ApiAdminLimitationSetsLimitationSetIdPutPath = '/api/admin/limitation/sets/{limitationSet_id}';

  /**
   * Update specified LimitationSet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationSetsLimitationSetIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationSetsLimitationSetIdPut$Response(params: {

    /**
     * The ID of the limitationSet.
     */
    limitationSet_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Name of the limitation set.
 */
'name': string;

/**
 * Date and time of the expiry of the limitation set. Must be a valid date.
 */
'valid_from': string;

/**
 * Date and time of the expiry of the limitation set. Must be a valid date.
 */
'valid_until'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationSetService.ApiAdminLimitationSetsLimitationSetIdPutPath, 'put');
    if (params) {
      rb.path('limitationSet_id', params.limitationSet_id, {});
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
   * Update specified LimitationSet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationSetsLimitationSetIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationSetsLimitationSetIdPut(params: {

    /**
     * The ID of the limitationSet.
     */
    limitationSet_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Name of the limitation set.
 */
'name': string;

/**
 * Date and time of the expiry of the limitation set. Must be a valid date.
 */
'valid_from': string;

/**
 * Date and time of the expiry of the limitation set. Must be a valid date.
 */
'valid_until'?: string;
}
  }): Observable<void> {

    return this.apiAdminLimitationSetsLimitationSetIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationSetsLimitationSetIdDelete
   */
  static readonly ApiAdminLimitationSetsLimitationSetIdDeletePath = '/api/admin/limitation/sets/{limitationSet_id}';

  /**
   * Delete specified LimitationSet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationSetsLimitationSetIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetsLimitationSetIdDelete$Response(params: {

    /**
     * The ID of the limitationSet.
     */
    limitationSet_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationSetService.ApiAdminLimitationSetsLimitationSetIdDeletePath, 'delete');
    if (params) {
      rb.path('limitationSet_id', params.limitationSet_id, {});
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
   * Delete specified LimitationSet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationSetsLimitationSetIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetsLimitationSetIdDelete(params: {

    /**
     * The ID of the limitationSet.
     */
    limitationSet_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminLimitationSetsLimitationSetIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
