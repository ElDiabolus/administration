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
   * Path part for operation apiAdminLimitationSetGet
   */
  static readonly ApiAdminLimitationSetGetPath = '/api/admin/limitation/set';

  /**
   * List all LimitationSets.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationSetGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetGet$Response(params?: {

    /**
     * Filter by name.
     */
    name?: string;
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
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;valid_from&lt;/code&gt;, or &lt;code&gt;valid_until&lt;/code&gt;.
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

    const rb = new RequestBuilder(this.rootUrl, LimitationSetService.ApiAdminLimitationSetGetPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('valid_from', params.valid_from, {});
      rb.query('valid_from.0', params['valid_from.0'], {});
      rb.query('valid_from.1', params['valid_from.1'], {});
      rb.query('valid_until', params.valid_until, {});
      rb.query('valid_until.0', params['valid_until.0'], {});
      rb.query('valid_until.1', params['valid_until.1'], {});
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
   * List all LimitationSets.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationSetGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetGet(params?: {

    /**
     * Filter by name.
     */
    name?: string;
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
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;valid_from&lt;/code&gt;, or &lt;code&gt;valid_until&lt;/code&gt;.
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

    return this.apiAdminLimitationSetGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationSetPost
   */
  static readonly ApiAdminLimitationSetPostPath = '/api/admin/limitation/set';

  /**
   * Create new LimitationSet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationSetPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationSetPost$Response(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Name of the limitation set.
 */
'name': string;

/**
 * Date and time of the start of the validity of the limitation set. Must be a valid date.
 */
'valid_from': string;

/**
 * Date and time of the expiry of the limitation set. Must be a valid date.
 */
'valid_until'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationSetService.ApiAdminLimitationSetPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiAdminLimitationSetPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationSetPost(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Name of the limitation set.
 */
'name': string;

/**
 * Date and time of the start of the validity of the limitation set. Must be a valid date.
 */
'valid_from': string;

/**
 * Date and time of the expiry of the limitation set. Must be a valid date.
 */
'valid_until'?: string;
}
  }): Observable<void> {

    return this.apiAdminLimitationSetPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationSetLimitationSetIdGet
   */
  static readonly ApiAdminLimitationSetLimitationSetIdGetPath = '/api/admin/limitation/set/{limitationSet_id}';

  /**
   * Show specified LimitationSet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationSetLimitationSetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetLimitationSetIdGet$Response(params: {

    /**
     * The ID of the limitationSet.
     */
    limitationSet_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationSetService.ApiAdminLimitationSetLimitationSetIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiAdminLimitationSetLimitationSetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetLimitationSetIdGet(params: {

    /**
     * The ID of the limitationSet.
     */
    limitationSet_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminLimitationSetLimitationSetIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationSetLimitationSetIdPut
   */
  static readonly ApiAdminLimitationSetLimitationSetIdPutPath = '/api/admin/limitation/set/{limitationSet_id}';

  /**
   * Update specified LimitationSet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationSetLimitationSetIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationSetLimitationSetIdPut$Response(params: {

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
 * Date and time of the start of the validity of the limitation set. Must be a valid date.
 */
'valid_from': string;

/**
 * Date and time of the expiry of the limitation set. Must be a valid date.
 */
'valid_until'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationSetService.ApiAdminLimitationSetLimitationSetIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiAdminLimitationSetLimitationSetIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationSetLimitationSetIdPut(params: {

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
 * Date and time of the start of the validity of the limitation set. Must be a valid date.
 */
'valid_from': string;

/**
 * Date and time of the expiry of the limitation set. Must be a valid date.
 */
'valid_until'?: string;
}
  }): Observable<void> {

    return this.apiAdminLimitationSetLimitationSetIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationSetLimitationSetIdDelete
   */
  static readonly ApiAdminLimitationSetLimitationSetIdDeletePath = '/api/admin/limitation/set/{limitationSet_id}';

  /**
   * Delete specified LimitationSet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationSetLimitationSetIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetLimitationSetIdDelete$Response(params: {

    /**
     * The ID of the limitationSet.
     */
    limitationSet_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationSetService.ApiAdminLimitationSetLimitationSetIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiAdminLimitationSetLimitationSetIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetLimitationSetIdDelete(params: {

    /**
     * The ID of the limitationSet.
     */
    limitationSet_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminLimitationSetLimitationSetIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
