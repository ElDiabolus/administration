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
export class ScheduleService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiScheduleGet
   */
  static readonly ApiScheduleGetPath = '/api/schedule';

  /**
   * List available shops.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * List all shops that are in the same organization as the user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiScheduleGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiScheduleGet$Response(params?: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ScheduleService.ApiScheduleGetPath, 'get');
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
   * List available shops.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * List all shops that are in the same organization as the user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiScheduleGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiScheduleGet(params?: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiScheduleGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiScheduleShopIdGet
   */
  static readonly ApiScheduleShopIdGetPath = '/api/schedule/{shop_id}';

  /**
   * List today´s reservations.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * List all today's reservations for a specified store
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiScheduleShopIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiScheduleShopIdGet$Response(params: {

    /**
     * The ID of the shop.
     */
    shop_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ScheduleService.ApiScheduleShopIdGetPath, 'get');
    if (params) {
      rb.path('shop_id', params.shop_id, {});
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
   * List today´s reservations.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * List all today's reservations for a specified store
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiScheduleShopIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiScheduleShopIdGet(params: {

    /**
     * The ID of the shop.
     */
    shop_id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiScheduleShopIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
