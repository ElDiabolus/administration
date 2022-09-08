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
export class ShopService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminShopGet
   */
  static readonly ApiAdminShopGetPath = '/api/admin/shop';

  /**
   * List all Shops.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminShopGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminShopGet$Response(params?: {

    /**
     * Organization.
     */
    organization_id?: string;

    /**
     * Name contains.
     */
    name?: string;

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

    /**
     * Contact contains.
     */
    contact?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;organization_id&lt;/code&gt;, &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;street&lt;/code&gt;, &lt;code&gt;postcode&lt;/code&gt;, &lt;code&gt;city&lt;/code&gt;, or &lt;code&gt;contact&lt;/code&gt;.
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

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiAdminShopGetPath, 'get');
    if (params) {
      rb.query('organization_id', params.organization_id, {});
      rb.query('name', params.name, {});
      rb.query('street', params.street, {});
      rb.query('postcode', params.postcode, {});
      rb.query('city', params.city, {});
      rb.query('contact', params.contact, {});
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
   * List all Shops.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminShopGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminShopGet(params?: {

    /**
     * Organization.
     */
    organization_id?: string;

    /**
     * Name contains.
     */
    name?: string;

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

    /**
     * Contact contains.
     */
    contact?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;organization_id&lt;/code&gt;, &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;street&lt;/code&gt;, &lt;code&gt;postcode&lt;/code&gt;, &lt;code&gt;city&lt;/code&gt;, or &lt;code&gt;contact&lt;/code&gt;.
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

    return this.apiAdminShopGet$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiAdminShopPost
   */
  static readonly ApiAdminShopPostPath = '/api/admin/shop';

  /**
   * Create new Shop.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminShopPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminShopPost$Response(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the organization the shop is attached to.
 */
'organization_id': string;

/**
 * Name of the shop.
 */
'name': string;

/**
 * Street where the shop is located.
 */
'street': string;

/**
 * Postcode where the shop is located.
 */
'postcode': string;

/**
 * City where the shop is located.
 */
'city': string;

/**
 * Contact information from the shop.
 */
'contact': string;
'opening_hours'?: {
'monday'?: Array<{

/**
 * Time of opening of the store on Monday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Monday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Monday. Must be at least 1.
 */
'slots': number;
}>;
'tuesday'?: Array<{

/**
 * Time of opening of the store on Tuesday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Tuesday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Tuesday. Must be at least 1.
 */
'slots': number;
}>;
'wednesday'?: Array<{

/**
 * Time of opening of the store on Wednesday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Wednesday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Wednesday. Must be at least 1.
 */
'slots': number;
}>;
'thursday'?: Array<{

/**
 * Time of opening of the store on Thursday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Thursday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Thursday. Must be at least 1.
 */
'slots': number;
}>;
'friday'?: Array<{

/**
 * Time of opening of the store on Friday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Friday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Friday. Must be at least 1.
 */
'slots': number;
}>;
'saturday'?: Array<{

/**
 * Time of opening of the store on Saturday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Saturday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Saturday. Must be at least 1.
 */
'slots': number;
}>;
'sunday'?: Array<{

/**
 * Time of opening of the store on Sunday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Sunday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Sunday. Must be at least 1.
 */
'slots': number;
}>;
};
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiAdminShopPostPath, 'post');
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
   * Create new Shop.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminShopPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminShopPost(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the organization the shop is attached to.
 */
'organization_id': string;

/**
 * Name of the shop.
 */
'name': string;

/**
 * Street where the shop is located.
 */
'street': string;

/**
 * Postcode where the shop is located.
 */
'postcode': string;

/**
 * City where the shop is located.
 */
'city': string;

/**
 * Contact information from the shop.
 */
'contact': string;
'opening_hours'?: {
'monday'?: Array<{

/**
 * Time of opening of the store on Monday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Monday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Monday. Must be at least 1.
 */
'slots': number;
}>;
'tuesday'?: Array<{

/**
 * Time of opening of the store on Tuesday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Tuesday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Tuesday. Must be at least 1.
 */
'slots': number;
}>;
'wednesday'?: Array<{

/**
 * Time of opening of the store on Wednesday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Wednesday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Wednesday. Must be at least 1.
 */
'slots': number;
}>;
'thursday'?: Array<{

/**
 * Time of opening of the store on Thursday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Thursday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Thursday. Must be at least 1.
 */
'slots': number;
}>;
'friday'?: Array<{

/**
 * Time of opening of the store on Friday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Friday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Friday. Must be at least 1.
 */
'slots': number;
}>;
'saturday'?: Array<{

/**
 * Time of opening of the store on Saturday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Saturday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Saturday. Must be at least 1.
 */
'slots': number;
}>;
'sunday'?: Array<{

/**
 * Time of opening of the store on Sunday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Sunday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Sunday. Must be at least 1.
 */
'slots': number;
}>;
};
}
  }): Observable<void> {

    return this.apiAdminShopPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminShopIdGet
   */
  static readonly ApiAdminShopIdGetPath = '/api/admin/shop/{id}';

  /**
   * Show specified Shop.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminShopIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminShopIdGet$Response(params: {

    /**
     * The ID of the shop.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'id'?: number;
'organization_id'?: number;
'name'?: string;
'street'?: string;
'postcode'?: string;
'city'?: string;
'contact'?: string;
'opening_hours'?: {
};
'created_at'?: string;
'updated_at'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiAdminShopIdGetPath, 'get');
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
        'organization_id'?: number;
        'name'?: string;
        'street'?: string;
        'postcode'?: string;
        'city'?: string;
        'contact'?: string;
        'opening_hours'?: {
        };
        'created_at'?: string;
        'updated_at'?: string;
        }>;
      })
    );
  }

  /**
   * Show specified Shop.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminShopIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminShopIdGet(params: {

    /**
     * The ID of the shop.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'id'?: number;
'organization_id'?: number;
'name'?: string;
'street'?: string;
'postcode'?: string;
'city'?: string;
'contact'?: string;
'opening_hours'?: {
};
'created_at'?: string;
'updated_at'?: string;
}> {

    return this.apiAdminShopIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<{
'id'?: number;
'organization_id'?: number;
'name'?: string;
'street'?: string;
'postcode'?: string;
'city'?: string;
'contact'?: string;
'opening_hours'?: {
};
'created_at'?: string;
'updated_at'?: string;
}>) => r.body as {
'id'?: number;
'organization_id'?: number;
'name'?: string;
'street'?: string;
'postcode'?: string;
'city'?: string;
'contact'?: string;
'opening_hours'?: {
};
'created_at'?: string;
'updated_at'?: string;
})
    );
  }

  /**
   * Path part for operation apiAdminShopIdPut
   */
  static readonly ApiAdminShopIdPutPath = '/api/admin/shop/{id}';

  /**
   * Update specified Shop.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminShopIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminShopIdPut$Response(params: {

    /**
     * The ID of the shop.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the organization the shop is attached to.
 */
'organization_id': string;

/**
 * Name of the shop.
 */
'name': string;

/**
 * Street where the shop is located.
 */
'street': string;

/**
 * Postcode where the shop is located.
 */
'postcode': string;

/**
 * City where the shop is located.
 */
'city': string;

/**
 * Contact information from the shop.
 */
'contact': string;
'opening_hours'?: {
'monday'?: Array<{

/**
 * Time of opening of the store on Monday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Monday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Monday. Must be at least 1.
 */
'slots': number;
}>;
'tuesday'?: Array<{

/**
 * Time of opening of the store on Tuesday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Tuesday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Tuesday. Must be at least 1.
 */
'slots': number;
}>;
'wednesday'?: Array<{

/**
 * Time of opening of the store on Wednesday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Wednesday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Wednesday. Must be at least 1.
 */
'slots': number;
}>;
'thursday'?: Array<{

/**
 * Time of opening of the store on Thursday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Thursday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Thursday. Must be at least 1.
 */
'slots': number;
}>;
'friday'?: Array<{

/**
 * Time of opening of the store on Friday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Friday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Friday. Must be at least 1.
 */
'slots': number;
}>;
'saturday'?: Array<{

/**
 * Time of opening of the store on Saturday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Saturday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Saturday. Must be at least 1.
 */
'slots': number;
}>;
'sunday'?: Array<{

/**
 * Time of opening of the store on Sunday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Sunday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Sunday. Must be at least 1.
 */
'slots': number;
}>;
};
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiAdminShopIdPutPath, 'put');
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
   * Update specified Shop.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminShopIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminShopIdPut(params: {

    /**
     * The ID of the shop.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the organization the shop is attached to.
 */
'organization_id': string;

/**
 * Name of the shop.
 */
'name': string;

/**
 * Street where the shop is located.
 */
'street': string;

/**
 * Postcode where the shop is located.
 */
'postcode': string;

/**
 * City where the shop is located.
 */
'city': string;

/**
 * Contact information from the shop.
 */
'contact': string;
'opening_hours'?: {
'monday'?: Array<{

/**
 * Time of opening of the store on Monday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Monday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Monday. Must be at least 1.
 */
'slots': number;
}>;
'tuesday'?: Array<{

/**
 * Time of opening of the store on Tuesday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Tuesday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Tuesday. Must be at least 1.
 */
'slots': number;
}>;
'wednesday'?: Array<{

/**
 * Time of opening of the store on Wednesday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Wednesday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Wednesday. Must be at least 1.
 */
'slots': number;
}>;
'thursday'?: Array<{

/**
 * Time of opening of the store on Thursday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Thursday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Thursday. Must be at least 1.
 */
'slots': number;
}>;
'friday'?: Array<{

/**
 * Time of opening of the store on Friday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Friday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Friday. Must be at least 1.
 */
'slots': number;
}>;
'saturday'?: Array<{

/**
 * Time of opening of the store on Saturday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Saturday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Saturday. Must be at least 1.
 */
'slots': number;
}>;
'sunday'?: Array<{

/**
 * Time of opening of the store on Sunday. The value format is invalid.
 */
'opens_at': string;

/**
 * Time of closing of the store on Sunday. The value format is invalid.
 */
'closes_at': string;

/**
 * Number of slots of the store for Sunday. Must be at least 1.
 */
'slots': number;
}>;
};
}
  }): Observable<void> {

    return this.apiAdminShopIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminShopIdDelete
   */
  static readonly ApiAdminShopIdDeletePath = '/api/admin/shop/{id}';

  /**
   * Delete specified Shop.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminShopIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminShopIdDelete$Response(params: {

    /**
     * The ID of the shop.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'success'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, ShopService.ApiAdminShopIdDeletePath, 'delete');
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
   * Delete specified Shop.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminShopIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminShopIdDelete(params: {

    /**
     * The ID of the shop.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'success'?: boolean;
}> {

    return this.apiAdminShopIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
}>) => r.body as {
'success'?: boolean;
})
    );
  }

}
