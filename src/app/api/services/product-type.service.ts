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
export class ProductTypeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminProductTypeGet
   */
  static readonly ApiAdminProductTypeGetPath = '/api/admin/product-type';

  /**
   * List all ProductTypes.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminProductTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypeGet$Response(params?: {

    /**
     * Name contains.
     */
    name?: string;

    /**
     * Icon contains.
     */
    icon?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;name&lt;/code&gt;, or &lt;code&gt;icon&lt;/code&gt;.
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
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypeGetPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('icon', params.icon, {});
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
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * List all ProductTypes.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminProductTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypeGet(params?: {

    /**
     * Name contains.
     */
    name?: string;

    /**
     * Icon contains.
     */
    icon?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;name&lt;/code&gt;, or &lt;code&gt;icon&lt;/code&gt;.
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
  }): Observable<string> {

    return this.apiAdminProductTypeGet$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiAdminProductTypePost
   */
  static readonly ApiAdminProductTypePostPath = '/api/admin/product-type';

  /**
   * Create new ProductType.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminProductTypePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminProductTypePost$Response(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Name of the product type.
 */
'name': string;

/**
 * Icon of the product type.
 */
'icon'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypePostPath, 'post');
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
   * Create new ProductType.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminProductTypePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminProductTypePost(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Name of the product type.
 */
'name': string;

/**
 * Icon of the product type.
 */
'icon'?: string;
}
  }): Observable<void> {

    return this.apiAdminProductTypePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminProductTypeIdGet
   */
  static readonly ApiAdminProductTypeIdGetPath = '/api/admin/product-type/{id}';

  /**
   * Show specified ProductType.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminProductTypeIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypeIdGet$Response(params: {

    /**
     * The ID of the productType.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'id'?: number;
'name'?: string;
'icon'?: string;
'created_at'?: string;
'updated_at'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypeIdGetPath, 'get');
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
        'icon'?: string;
        'created_at'?: string;
        'updated_at'?: string;
        }>;
      })
    );
  }

  /**
   * Show specified ProductType.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminProductTypeIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypeIdGet(params: {

    /**
     * The ID of the productType.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'id'?: number;
'name'?: string;
'icon'?: string;
'created_at'?: string;
'updated_at'?: string;
}> {

    return this.apiAdminProductTypeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<{
'id'?: number;
'name'?: string;
'icon'?: string;
'created_at'?: string;
'updated_at'?: string;
}>) => r.body as {
'id'?: number;
'name'?: string;
'icon'?: string;
'created_at'?: string;
'updated_at'?: string;
})
    );
  }

  /**
   * Path part for operation apiAdminProductTypeIdPut
   */
  static readonly ApiAdminProductTypeIdPutPath = '/api/admin/product-type/{id}';

  /**
   * Update specified ProductType.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminProductTypeIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminProductTypeIdPut$Response(params: {

    /**
     * The ID of the productType.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Name of the product type.
 */
'name': string;

/**
 * Icon of the product type.
 */
'icon'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypeIdPutPath, 'put');
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
   * Update specified ProductType.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminProductTypeIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminProductTypeIdPut(params: {

    /**
     * The ID of the productType.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Name of the product type.
 */
'name': string;

/**
 * Icon of the product type.
 */
'icon'?: string;
}
  }): Observable<void> {

    return this.apiAdminProductTypeIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminProductTypeIdDelete
   */
  static readonly ApiAdminProductTypeIdDeletePath = '/api/admin/product-type/{id}';

  /**
   * Delete specified ProductType.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminProductTypeIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypeIdDelete$Response(params: {

    /**
     * The ID of the productType.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'success'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypeIdDeletePath, 'delete');
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
   * Delete specified ProductType.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminProductTypeIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypeIdDelete(params: {

    /**
     * The ID of the productType.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'success'?: boolean;
}> {

    return this.apiAdminProductTypeIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
}>) => r.body as {
'success'?: boolean;
})
    );
  }

}
