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
  }): Observable<StrictHttpResponse<string>> {

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
        return r as StrictHttpResponse<string>;
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
  }): Observable<string> {

    return this.apiScheduleGet$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiScheduleIdGet
   */
  static readonly ApiScheduleIdGetPath = '/api/schedule/{id}';

  /**
   * List today´s reservations.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * List all today's reservations for a specified store
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiScheduleIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiScheduleIdGet$Response(params: {

    /**
     * The ID of the shop.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<Array<{
}>>> {

    const rb = new RequestBuilder(this.rootUrl, ScheduleService.ApiScheduleIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<{
        }>>;
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
   * To access the full response (for headers, for example), `apiScheduleIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiScheduleIdGet(params: {

    /**
     * The ID of the shop.
     */
    id: number;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<Array<{
}>> {

    return this.apiScheduleIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{
}>>) => r.body as Array<{
}>)
    );
  }

}
