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
export class OrganizationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminOrganizationGet
   */
  static readonly ApiAdminOrganizationGetPath = '/api/admin/organization';

  /**
   * List all Organization.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminOrganizationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminOrganizationGet$Response(params?: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiAdminOrganizationGetPath, 'get');
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
   * List all Organization.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminOrganizationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminOrganizationGet(params?: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminOrganizationGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminOrganizationPost
   */
  static readonly ApiAdminOrganizationPostPath = '/api/admin/organization';

  /**
   * Create new Organization.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminOrganizationPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminOrganizationPost$Response(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the instance the organization is attached to.
 */
'instance_id': string;

/**
 * Name of the organization.
 */
'name': string;

/**
 * Street where the organization is located.
 */
'street': string;

/**
 * Postcode where the organization is located.
 */
'postcode': string;

/**
 * City where the organization is located.
 */
'city': string;

/**
 * Contact information from the organization.
 */
'contact': string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiAdminOrganizationPostPath, 'post');
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
   * Create new Organization.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminOrganizationPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminOrganizationPost(params: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the instance the organization is attached to.
 */
'instance_id': string;

/**
 * Name of the organization.
 */
'name': string;

/**
 * Street where the organization is located.
 */
'street': string;

/**
 * Postcode where the organization is located.
 */
'postcode': string;

/**
 * City where the organization is located.
 */
'city': string;

/**
 * Contact information from the organization.
 */
'contact': string;
}
  }): Observable<void> {

    return this.apiAdminOrganizationPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminOrganizationIdGet
   */
  static readonly ApiAdminOrganizationIdGetPath = '/api/admin/organization/{id}';

  /**
   * Show specified Organization.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminOrganizationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminOrganizationIdGet$Response(params: {

    /**
     * The ID of the organization.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiAdminOrganizationIdGetPath, 'get');
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
   * Show specified Organization.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminOrganizationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminOrganizationIdGet(params: {

    /**
     * The ID of the organization.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminOrganizationIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminOrganizationIdPut
   */
  static readonly ApiAdminOrganizationIdPutPath = '/api/admin/organization/{id}';

  /**
   * Update specified Organization.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminOrganizationIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminOrganizationIdPut$Response(params: {

    /**
     * The ID of the organization.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the instance the organization is attached to.
 */
'instance_id': string;

/**
 * Name of the organization.
 */
'name': string;

/**
 * Street where the organization is located.
 */
'street': string;

/**
 * Postcode where the organization is located.
 */
'postcode': string;

/**
 * City where the organization is located.
 */
'city': string;

/**
 * Contact information from the organization.
 */
'contact': string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiAdminOrganizationIdPutPath, 'put');
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
   * Update specified Organization.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminOrganizationIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAdminOrganizationIdPut(params: {

    /**
     * The ID of the organization.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * ID of the instance the organization is attached to.
 */
'instance_id': string;

/**
 * Name of the organization.
 */
'name': string;

/**
 * Street where the organization is located.
 */
'street': string;

/**
 * Postcode where the organization is located.
 */
'postcode': string;

/**
 * City where the organization is located.
 */
'city': string;

/**
 * Contact information from the organization.
 */
'contact': string;
}
  }): Observable<void> {

    return this.apiAdminOrganizationIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminOrganizationIdDelete
   */
  static readonly ApiAdminOrganizationIdDeletePath = '/api/admin/organization/{id}';

  /**
   * Delete specified Organization.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminOrganizationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminOrganizationIdDelete$Response(params: {

    /**
     * The ID of the organization.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrganizationService.ApiAdminOrganizationIdDeletePath, 'delete');
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
   * Delete specified Organization.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAdminOrganizationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminOrganizationIdDelete(params: {

    /**
     * The ID of the organization.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiAdminOrganizationIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
