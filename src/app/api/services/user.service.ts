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
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminUserGet
   */
  static readonly ApiAdminUserGetPath = '/api/admin/user';

  /**
   * List all Users.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminUserGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminUserGet$Response(params?: {

    /**
     * Organization.
     */
    organization_id?: string;

    /**
     * Name contains.
     */
    name?: string;

    /**
     * E-Mail contains.
     */
    email?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;organization_id&lt;/code&gt;, &lt;code&gt;name&lt;/code&gt;, or &lt;code&gt;email&lt;/code&gt;.
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

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiAdminUserGetPath, 'get');
    if (params) {
      rb.query('organization_id', params.organization_id, {});
      rb.query('name', params.name, {});
      rb.query('email', params.email, {});
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
   * List all Users.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminUserGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminUserGet(params?: {

    /**
     * Organization.
     */
    organization_id?: string;

    /**
     * Name contains.
     */
    name?: string;

    /**
     * E-Mail contains.
     */
    email?: string;

    /**
     * Sort by given field. Must be one of &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;organization_id&lt;/code&gt;, &lt;code&gt;name&lt;/code&gt;, or &lt;code&gt;email&lt;/code&gt;.
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

    return this.apiAdminUserGet$Response(params).pipe(
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
   * Path part for operation apiAdminUserPost
   */
  static readonly ApiAdminUserPostPath = '/api/admin/user';

  /**
   * Create new User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminUserPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminUserPost$Response(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the organization the user is attached to.
 */
'organization_id': string;

/**
 * Name of the user.
 */
'name': string;

/**
 * Email of the user. Must be a valid email address.
 */
'email': string;

/**
 * Password of the user.
 */
'password': string;

/**
 * Must be one of <code>inactive</code>, <code>external_employee</code>, <code>external_manager</code>, <code>employee</code>, <code>organization_manager</code>, or <code>instance_manager</code>.
 */
'role': string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiAdminUserPostPath, 'post');
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
   * Create new User.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminUserPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminUserPost(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the organization the user is attached to.
 */
'organization_id': string;

/**
 * Name of the user.
 */
'name': string;

/**
 * Email of the user. Must be a valid email address.
 */
'email': string;

/**
 * Password of the user.
 */
'password': string;

/**
 * Must be one of <code>inactive</code>, <code>external_employee</code>, <code>external_manager</code>, <code>employee</code>, <code>organization_manager</code>, or <code>instance_manager</code>.
 */
'role': string;
}
  }): Observable<void> {

    return this.apiAdminUserPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminUserIdGet
   */
  static readonly ApiAdminUserIdGetPath = '/api/admin/user/{id}';

  /**
   * Show specified User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminUserIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminUserIdGet$Response(params: {

    /**
     * The ID of the user.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiAdminUserIdGetPath, 'get');
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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Show specified User.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminUserIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminUserIdGet(params: {

    /**
     * The ID of the user.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminUserIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminUserIdPut
   */
  static readonly ApiAdminUserIdPutPath = '/api/admin/user/{id}';

  /**
   * Update specified User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminUserIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminUserIdPut$Response(params: {

    /**
     * The ID of the user.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the organization the user is attached to.
 */
'organization_id': string;

/**
 * Name of the user.
 */
'name': string;

/**
 * Email of the user. Must be a valid email address.
 */
'email': string;

/**
 * Password of the user.
 */
'password'?: string;

/**
 * Must be one of <code>inactive</code>, <code>external_employee</code>, <code>external_manager</code>, <code>employee</code>, <code>organization_manager</code>, or <code>instance_manager</code>.
 */
'role': string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiAdminUserIdPutPath, 'put');
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
   * Update specified User.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminUserIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminUserIdPut(params: {

    /**
     * The ID of the user.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the organization the user is attached to.
 */
'organization_id': string;

/**
 * Name of the user.
 */
'name': string;

/**
 * Email of the user. Must be a valid email address.
 */
'email': string;

/**
 * Password of the user.
 */
'password'?: string;

/**
 * Must be one of <code>inactive</code>, <code>external_employee</code>, <code>external_manager</code>, <code>employee</code>, <code>organization_manager</code>, or <code>instance_manager</code>.
 */
'role': string;
}
  }): Observable<void> {

    return this.apiAdminUserIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminUserIdDelete
   */
  static readonly ApiAdminUserIdDeletePath = '/api/admin/user/{id}';

  /**
   * Delete specified User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminUserIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminUserIdDelete$Response(params: {

    /**
     * The ID of the user.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'success'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiAdminUserIdDeletePath, 'delete');
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
   * Delete specified User.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminUserIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminUserIdDelete(params: {

    /**
     * The ID of the user.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'success'?: boolean;
}> {

    return this.apiAdminUserIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
}>) => r.body as {
'success'?: boolean;
})
    );
  }

}
