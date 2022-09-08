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

    return this.apiAdminLimitationSetGet$Response(params).pipe(
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
   * Path part for operation apiAdminLimitationSetIdGet
   */
  static readonly ApiAdminLimitationSetIdGetPath = '/api/admin/limitation/set/{id}';

  /**
   * Show specified LimitationSet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationSetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetIdGet$Response(params: {

    /**
     * The ID of the limitationSet.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'id'?: number;
'name'?: string;
'valid_from'?: string;
'valid_until'?: string;
'created_at'?: string;
'updated_at'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationSetService.ApiAdminLimitationSetIdGetPath, 'get');
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
        'name'?: string;
        'valid_from'?: string;
        'valid_until'?: string;
        'created_at'?: string;
        'updated_at'?: string;
        }>;
      })
    );
  }

  /**
   * Show specified LimitationSet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationSetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetIdGet(params: {

    /**
     * The ID of the limitationSet.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'id'?: number;
'name'?: string;
'valid_from'?: string;
'valid_until'?: string;
'created_at'?: string;
'updated_at'?: string;
}> {

    return this.apiAdminLimitationSetIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<{
'id'?: number;
'name'?: string;
'valid_from'?: string;
'valid_until'?: string;
'created_at'?: string;
'updated_at'?: string;
}>) => r.body as {
'id'?: number;
'name'?: string;
'valid_from'?: string;
'valid_until'?: string;
'created_at'?: string;
'updated_at'?: string;
})
    );
  }

  /**
   * Path part for operation apiAdminLimitationSetIdPut
   */
  static readonly ApiAdminLimitationSetIdPutPath = '/api/admin/limitation/set/{id}';

  /**
   * Update specified LimitationSet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationSetIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationSetIdPut$Response(params: {

    /**
     * The ID of the limitationSet.
     */
    id: number;
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

    const rb = new RequestBuilder(this.rootUrl, LimitationSetService.ApiAdminLimitationSetIdPutPath, 'put');
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
   * Update specified LimitationSet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationSetIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationSetIdPut(params: {

    /**
     * The ID of the limitationSet.
     */
    id: number;
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

    return this.apiAdminLimitationSetIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationSetIdDelete
   */
  static readonly ApiAdminLimitationSetIdDeletePath = '/api/admin/limitation/set/{id}';

  /**
   * Delete specified LimitationSet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationSetIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetIdDelete$Response(params: {

    /**
     * The ID of the limitationSet.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'success'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationSetService.ApiAdminLimitationSetIdDeletePath, 'delete');
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
   * Delete specified LimitationSet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationSetIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationSetIdDelete(params: {

    /**
     * The ID of the limitationSet.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'success'?: boolean;
}> {

    return this.apiAdminLimitationSetIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
}>) => r.body as {
'success'?: boolean;
})
    );
  }

}
