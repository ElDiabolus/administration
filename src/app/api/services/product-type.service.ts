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
   * Path part for operation apiAdminProductTypesGet
   */
  static readonly ApiAdminProductTypesGetPath = '/api/admin/product-types';

  /**
   * List all ProductTypes.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminProductTypesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypesGet$Response(params?: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypesGetPath, 'get');
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
   * List all ProductTypes.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminProductTypesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypesGet(params?: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminProductTypesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminProductTypesPost
   */
  static readonly ApiAdminProductTypesPostPath = '/api/admin/product-types';

  /**
   * Create new ProductType.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminProductTypesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminProductTypesPost$Response(params: {
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

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypesPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiAdminProductTypesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminProductTypesPost(params: {
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

    return this.apiAdminProductTypesPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminProductTypesProductTypeIdGet
   */
  static readonly ApiAdminProductTypesProductTypeIdGetPath = '/api/admin/product-types/{productType_id}';

  /**
   * Show specified ProductType.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminProductTypesProductTypeIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypesProductTypeIdGet$Response(params: {

    /**
     * The ID of the productType.
     */
    productType_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypesProductTypeIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiAdminProductTypesProductTypeIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypesProductTypeIdGet(params: {

    /**
     * The ID of the productType.
     */
    productType_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminProductTypesProductTypeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminProductTypesProductTypeIdPut
   */
  static readonly ApiAdminProductTypesProductTypeIdPutPath = '/api/admin/product-types/{productType_id}';

  /**
   * Update specified ProductType.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminProductTypesProductTypeIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminProductTypesProductTypeIdPut$Response(params: {

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

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypesProductTypeIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiAdminProductTypesProductTypeIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminProductTypesProductTypeIdPut(params: {

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

    return this.apiAdminProductTypesProductTypeIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminProductTypesProductTypeIdDelete
   */
  static readonly ApiAdminProductTypesProductTypeIdDeletePath = '/api/admin/product-types/{productType_id}';

  /**
   * Delete specified ProductType.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminProductTypesProductTypeIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypesProductTypeIdDelete$Response(params: {

    /**
     * The ID of the productType.
     */
    productType_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductTypeService.ApiAdminProductTypesProductTypeIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiAdminProductTypesProductTypeIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminProductTypesProductTypeIdDelete(params: {

    /**
     * The ID of the productType.
     */
    productType_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminProductTypesProductTypeIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
