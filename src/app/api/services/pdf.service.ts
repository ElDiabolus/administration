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
export class PdfService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPdfCardCardIdGet
   */
  static readonly ApiPdfCardCardIdGetPath = '/api/pdf/card/{card_id}';

  /**
   * Print specified Card.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * Generate PDF for the given Card-ID. You can control the response with the Query-Params listed below.
   * If none is given it will generate a json with the base64 encoded PDF-File.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPdfCardCardIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPdfCardCardIdGet$Response(params: {

    /**
     * The ID of the card.
     */
    card_id: number;

    /**
     * Download generated PDF
     */
    download?: string;

    /**
     * Show PDF in Browser
     */
    raw?: string;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PdfService.ApiPdfCardCardIdGetPath, 'get');
    if (params) {
      rb.path('card_id', params.card_id, {});
      rb.query('download', params.download, {});
      rb.query('raw', params.raw, {});
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
   * Print specified Card.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * Generate PDF for the given Card-ID. You can control the response with the Query-Params listed below.
   * If none is given it will generate a json with the base64 encoded PDF-File.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPdfCardCardIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPdfCardCardIdGet(params: {

    /**
     * The ID of the card.
     */
    card_id: number;

    /**
     * Download generated PDF
     */
    download?: string;

    /**
     * Show PDF in Browser
     */
    raw?: string;
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<void> {

    return this.apiPdfCardCardIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
