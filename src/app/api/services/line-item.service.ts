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
export class LineItemService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminLineItemGet
   */
  static readonly ApiAdminLineItemGetPath = '/api/admin/lineItem';

  /**
   * List all LineItems.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLineItemGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLineItemGet$Response(params?: {

    /**
     * Visit.
     */
    visit_id?: string;

    /**
     * Person.
     */
    person_id?: string;

    /**
     * Product Type.
     */
    product_type_id?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;visit_id&lt;/code&gt;, &lt;code&gt;person_id&lt;/code&gt;, or &lt;code&gt;product_type_id&lt;/code&gt;.
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

    const rb = new RequestBuilder(this.rootUrl, LineItemService.ApiAdminLineItemGetPath, 'get');
    if (params) {
      rb.query('visit_id', params.visit_id, {});
      rb.query('person_id', params.person_id, {});
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
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * List all LineItems.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLineItemGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLineItemGet(params?: {

    /**
     * Visit.
     */
    visit_id?: string;

    /**
     * Person.
     */
    person_id?: string;

    /**
     * Product Type.
     */
    product_type_id?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;visit_id&lt;/code&gt;, &lt;code&gt;person_id&lt;/code&gt;, or &lt;code&gt;product_type_id&lt;/code&gt;.
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

    return this.apiAdminLineItemGet$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiAdminLineItemPost
   */
  static readonly ApiAdminLineItemPostPath = '/api/admin/lineItem';

  /**
   * Create new LineItem.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLineItemPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLineItemPost$Response(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the visit the lineItem is attached to.
 */
'visit_id': string;

/**
 * ID of the person the lineItem is attached to.
 */
'person_id': string;

/**
 * ID of the product_type the lineItem is attached to.
 */
'product_type_id': string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LineItemService.ApiAdminLineItemPostPath, 'post');
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
   * Create new LineItem.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLineItemPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLineItemPost(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the visit the lineItem is attached to.
 */
'visit_id': string;

/**
 * ID of the person the lineItem is attached to.
 */
'person_id': string;

/**
 * ID of the product_type the lineItem is attached to.
 */
'product_type_id': string;
}
  }): Observable<void> {

    return this.apiAdminLineItemPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLineItemIdGet
   */
  static readonly ApiAdminLineItemIdGetPath = '/api/admin/lineItem/{id}';

  /**
   * Show specified LineItem.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLineItemIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLineItemIdGet$Response(params: {

    /**
     * The ID of the lineItem.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'id'?: number;
'visit_id'?: number;
'person_id'?: number;
'product_type_id'?: number;
'person'?: {
};
'product_type'?: {
};
'created_at'?: string;
'updated_at'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, LineItemService.ApiAdminLineItemIdGetPath, 'get');
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
        'visit_id'?: number;
        'person_id'?: number;
        'product_type_id'?: number;
        'person'?: {
        };
        'product_type'?: {
        };
        'created_at'?: string;
        'updated_at'?: string;
        }>;
      })
    );
  }

  /**
   * Show specified LineItem.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLineItemIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLineItemIdGet(params: {

    /**
     * The ID of the lineItem.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'id'?: number;
'visit_id'?: number;
'person_id'?: number;
'product_type_id'?: number;
'person'?: {
};
'product_type'?: {
};
'created_at'?: string;
'updated_at'?: string;
}> {

    return this.apiAdminLineItemIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<{
'id'?: number;
'visit_id'?: number;
'person_id'?: number;
'product_type_id'?: number;
'person'?: {
};
'product_type'?: {
};
'created_at'?: string;
'updated_at'?: string;
}>) => r.body as {
'id'?: number;
'visit_id'?: number;
'person_id'?: number;
'product_type_id'?: number;
'person'?: {
};
'product_type'?: {
};
'created_at'?: string;
'updated_at'?: string;
})
    );
  }

  /**
   * Path part for operation apiAdminLineItemIdPut
   */
  static readonly ApiAdminLineItemIdPutPath = '/api/admin/lineItem/{id}';

  /**
   * Update specified LineItem.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLineItemIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLineItemIdPut$Response(params: {

    /**
     * The ID of the lineItem.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the visit the lineItem is attached to.
 */
'visit_id': string;

/**
 * ID of the person the lineItem is attached to.
 */
'person_id': string;

/**
 * ID of the product_type the lineItem is attached to.
 */
'product_type_id': string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LineItemService.ApiAdminLineItemIdPutPath, 'put');
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
   * Update specified LineItem.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLineItemIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminLineItemIdPut(params: {

    /**
     * The ID of the lineItem.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the visit the lineItem is attached to.
 */
'visit_id': string;

/**
 * ID of the person the lineItem is attached to.
 */
'person_id': string;

/**
 * ID of the product_type the lineItem is attached to.
 */
'product_type_id': string;
}
  }): Observable<void> {

    return this.apiAdminLineItemIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminLineItemIdDelete
   */
  static readonly ApiAdminLineItemIdDeletePath = '/api/admin/lineItem/{id}';

  /**
   * Delete specified LineItem.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminLineItemIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLineItemIdDelete$Response(params: {

    /**
     * The ID of the lineItem.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'success'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, LineItemService.ApiAdminLineItemIdDeletePath, 'delete');
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
   * Delete specified LineItem.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminLineItemIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminLineItemIdDelete(params: {

    /**
     * The ID of the lineItem.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'success'?: boolean;
}> {

    return this.apiAdminLineItemIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
}>) => r.body as {
'success'?: boolean;
})
    );
  }

}
