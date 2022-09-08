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
   * Path part for operation apiAdminLimitationLimitGet
   */
  static readonly ApiAdminLimitationLimitGetPath = '/api/admin/limitation/limit';

  /**
   * List all Limitation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationLimitGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationLimitGet$Response(params?: {

    /**
     * Limitation Set.
     */
    limitation_set_id?: string;

    /**
     * Product Type.
     */
    product_type_id?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;limitation_set_id&lt;/code&gt;, &lt;code&gt;product_type_id&lt;/code&gt;, or &lt;code&gt;limit&lt;/code&gt;.
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

    const rb = new RequestBuilder(this.rootUrl, LimitationService.ApiAdminLimitationLimitGetPath, 'get');
    if (params) {
      rb.query('limitation_set_id', params.limitation_set_id, {});
      rb.query('product_type_id', params.product_type_id, {});
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
   * List all Limitation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationLimitGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationLimitGet(params?: {

    /**
     * Limitation Set.
     */
    limitation_set_id?: string;

    /**
     * Product Type.
     */
    product_type_id?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;limitation_set_id&lt;/code&gt;, &lt;code&gt;product_type_id&lt;/code&gt;, or &lt;code&gt;limit&lt;/code&gt;.
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

    return this.apiAdminLimitationLimitGet$Response(params).pipe(
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
   * Path part for operation apiAdminLimitationLimitPost
   */
  static readonly ApiAdminLimitationLimitPostPath = '/api/admin/limitation/limit';

  /**
   * Create new Limitation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationLimitPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationLimitPost$Response(params: {
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

    const rb = new RequestBuilder(this.rootUrl, LimitationService.ApiAdminLimitationLimitPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiAdminLimitationLimitPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationLimitPost(params: {
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

    return this.apiAdminLimitationLimitPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationLimitIdGet
   */
  static readonly ApiAdminLimitationLimitIdGetPath = '/api/admin/limitation/limit/{id}';

  /**
   * Show specified Limitation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationLimitIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationLimitIdGet$Response(params: {

    /**
     * The ID of the limitation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'id'?: number;
'product_type_id'?: number;
'limitation_set_id'?: number;
'limit'?: number;
'product_type'?: {
};
'created_at'?: string;
'updated_at'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationService.ApiAdminLimitationLimitIdGetPath, 'get');
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
        'product_type_id'?: number;
        'limitation_set_id'?: number;
        'limit'?: number;
        'product_type'?: {
        };
        'created_at'?: string;
        'updated_at'?: string;
        }>;
      })
    );
  }

  /**
   * Show specified Limitation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationLimitIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationLimitIdGet(params: {

    /**
     * The ID of the limitation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'id'?: number;
'product_type_id'?: number;
'limitation_set_id'?: number;
'limit'?: number;
'product_type'?: {
};
'created_at'?: string;
'updated_at'?: string;
}> {

    return this.apiAdminLimitationLimitIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<{
'id'?: number;
'product_type_id'?: number;
'limitation_set_id'?: number;
'limit'?: number;
'product_type'?: {
};
'created_at'?: string;
'updated_at'?: string;
}>) => r.body as {
'id'?: number;
'product_type_id'?: number;
'limitation_set_id'?: number;
'limit'?: number;
'product_type'?: {
};
'created_at'?: string;
'updated_at'?: string;
})
    );
  }

  /**
   * Path part for operation apiAdminLimitationLimitIdPut
   */
  static readonly ApiAdminLimitationLimitIdPutPath = '/api/admin/limitation/limit/{id}';

  /**
   * Update specified Limitation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationLimitIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationLimitIdPut$Response(params: {

    /**
     * The ID of the limitation.
     */
    id: number;
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

    const rb = new RequestBuilder(this.rootUrl, LimitationService.ApiAdminLimitationLimitIdPutPath, 'put');
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
   * Update specified Limitation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationLimitIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLimitationLimitIdPut(params: {

    /**
     * The ID of the limitation.
     */
    id: number;
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

    return this.apiAdminLimitationLimitIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLimitationLimitIdDelete
   */
  static readonly ApiAdminLimitationLimitIdDeletePath = '/api/admin/limitation/limit/{id}';

  /**
   * Delete specified Limitation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLimitationLimitIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationLimitIdDelete$Response(params: {

    /**
     * The ID of the limitation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'success'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, LimitationService.ApiAdminLimitationLimitIdDeletePath, 'delete');
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
   * Delete specified Limitation.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLimitationLimitIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLimitationLimitIdDelete(params: {

    /**
     * The ID of the limitation.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'success'?: boolean;
}> {

    return this.apiAdminLimitationLimitIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
}>) => r.body as {
'success'?: boolean;
})
    );
  }

}
