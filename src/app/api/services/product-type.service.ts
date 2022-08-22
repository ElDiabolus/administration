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
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypeGetPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('icon', params.icon, {});
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
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminProductTypeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
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
   * Path part for operation apiAdminProductTypeProductTypeIdGet
   */
  static readonly ApiAdminProductTypeProductTypeIdGetPath = '/api/admin/product-type/{productType_id}';

  /**
   * Show specified ProductType.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminProductTypeProductTypeIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypeProductTypeIdGet$Response(params: {

    /**
     * The ID of the productType.
     */
    productType_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypeProductTypeIdGetPath, 'get');
    if (params) {
      rb.path('productType_id', params.productType_id, {});
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
   * Show specified ProductType.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminProductTypeProductTypeIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypeProductTypeIdGet(params: {

    /**
     * The ID of the productType.
     */
    productType_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminProductTypeProductTypeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminProductTypeProductTypeIdPut
   */
  static readonly ApiAdminProductTypeProductTypeIdPutPath = '/api/admin/product-type/{productType_id}';

  /**
   * Update specified ProductType.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminProductTypeProductTypeIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminProductTypeProductTypeIdPut$Response(params: {

    /**
     * The ID of the productType.
     */
    productType_id: number;
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

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypeProductTypeIdPutPath, 'put');
    if (params) {
      rb.path('productType_id', params.productType_id, {});
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
   * To access the full response (for headers, for example), `apiAdminProductTypeProductTypeIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminProductTypeProductTypeIdPut(params: {

    /**
     * The ID of the productType.
     */
    productType_id: number;
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

    return this.apiAdminProductTypeProductTypeIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminProductTypeProductTypeIdDelete
   */
  static readonly ApiAdminProductTypeProductTypeIdDeletePath = '/api/admin/product-type/{productType_id}';

  /**
   * Delete specified ProductType.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminProductTypeProductTypeIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypeProductTypeIdDelete$Response(params: {

    /**
     * The ID of the productType.
     */
    productType_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypeProductTypeIdDeletePath, 'delete');
    if (params) {
      rb.path('productType_id', params.productType_id, {});
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
   * Delete specified ProductType.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminProductTypeProductTypeIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypeProductTypeIdDelete(params: {

    /**
     * The ID of the productType.
     */
    productType_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminProductTypeProductTypeIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
