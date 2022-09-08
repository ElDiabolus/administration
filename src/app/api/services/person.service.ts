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
export class PersonService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminPersonGet
   */
  static readonly ApiAdminPersonGetPath = '/api/admin/person';

  /**
   * List all persons.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminPersonGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminPersonGet$Response(params?: {

    /**
     * Card.
     */
    card_id?: string;

    /**
     * Gender contains.
     */
    gender?: string;

    /**
     * Age is.
     */
    age?: number;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;card_id&lt;/code&gt;, &lt;code&gt;gender&lt;/code&gt;, or &lt;code&gt;age&lt;/code&gt;.
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

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiAdminPersonGetPath, 'get');
    if (params) {
      rb.query('card_id', params.card_id, {});
      rb.query('gender', params.gender, {});
      rb.query('age', params.age, {});
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
   * List all persons.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminPersonGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminPersonGet(params?: {

    /**
     * Card.
     */
    card_id?: string;

    /**
     * Gender contains.
     */
    gender?: string;

    /**
     * Age is.
     */
    age?: number;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;card_id&lt;/code&gt;, &lt;code&gt;gender&lt;/code&gt;, or &lt;code&gt;age&lt;/code&gt;.
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

    return this.apiAdminPersonGet$Response(params).pipe(
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
   * Path part for operation apiAdminPersonPost
   */
  static readonly ApiAdminPersonPostPath = '/api/admin/person';

  /**
   * Create new Person.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminPersonPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminPersonPost$Response(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the card the person is attached to.
 */
'card_id': string;

/**
 * Gender of the person.
 */
'gender': string;

/**
 * Age of the Person.
 */
'age': number;

/**
 * IDs of the limitation_sets.
 */
'limitation_sets': Array<string>;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiAdminPersonPostPath, 'post');
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
   * Create new Person.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminPersonPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminPersonPost(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the card the person is attached to.
 */
'card_id': string;

/**
 * Gender of the person.
 */
'gender': string;

/**
 * Age of the Person.
 */
'age': number;

/**
 * IDs of the limitation_sets.
 */
'limitation_sets': Array<string>;
}
  }): Observable<void> {

    return this.apiAdminPersonPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminPersonIdGet
   */
  static readonly ApiAdminPersonIdGetPath = '/api/admin/person/{id}';

  /**
   * Show specified Person.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminPersonIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminPersonIdGet$Response(params: {

    /**
     * The ID of the person.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'id'?: number;
'card_id'?: number;
'gender'?: string;
'age'?: number;
'limitation_sets'?: Array<{
}>;
'created_at'?: string;
'updated_at'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiAdminPersonIdGetPath, 'get');
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
        'card_id'?: number;
        'gender'?: string;
        'age'?: number;
        'limitation_sets'?: Array<{
        }>;
        'created_at'?: string;
        'updated_at'?: string;
        }>;
      })
    );
  }

  /**
   * Show specified Person.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminPersonIdGet(params: {

    /**
     * The ID of the person.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'id'?: number;
'card_id'?: number;
'gender'?: string;
'age'?: number;
'limitation_sets'?: Array<{
}>;
'created_at'?: string;
'updated_at'?: string;
}> {

    return this.apiAdminPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<{
'id'?: number;
'card_id'?: number;
'gender'?: string;
'age'?: number;
'limitation_sets'?: Array<{
}>;
'created_at'?: string;
'updated_at'?: string;
}>) => r.body as {
'id'?: number;
'card_id'?: number;
'gender'?: string;
'age'?: number;
'limitation_sets'?: Array<{
}>;
'created_at'?: string;
'updated_at'?: string;
})
    );
  }

  /**
   * Path part for operation apiAdminPersonIdPut
   */
  static readonly ApiAdminPersonIdPutPath = '/api/admin/person/{id}';

  /**
   * Update specified Person.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminPersonIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminPersonIdPut$Response(params: {

    /**
     * The ID of the person.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the card the person is attached to.
 */
'card_id': string;

/**
 * Gender of the person.
 */
'gender': string;

/**
 * Age of the Person.
 */
'age': number;

/**
 * IDs of the limitation_sets.
 */
'limitation_sets': Array<string>;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiAdminPersonIdPutPath, 'put');
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
   * Update specified Person.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminPersonIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminPersonIdPut(params: {

    /**
     * The ID of the person.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the card the person is attached to.
 */
'card_id': string;

/**
 * Gender of the person.
 */
'gender': string;

/**
 * Age of the Person.
 */
'age': number;

/**
 * IDs of the limitation_sets.
 */
'limitation_sets': Array<string>;
}
  }): Observable<void> {

    return this.apiAdminPersonIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminPersonIdDelete
   */
  static readonly ApiAdminPersonIdDeletePath = '/api/admin/person/{id}';

  /**
   * Delete specified Person.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminPersonIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminPersonIdDelete$Response(params: {

    /**
     * The ID of the person.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'success'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiAdminPersonIdDeletePath, 'delete');
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
   * Delete specified Person.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminPersonIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminPersonIdDelete(params: {

    /**
     * The ID of the person.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'success'?: boolean;
}> {

    return this.apiAdminPersonIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
}>) => r.body as {
'success'?: boolean;
})
    );
  }

}
