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
export class PasswordResetService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPasswordForgotPost
   */
  static readonly ApiPasswordForgotPostPath = '/api/password/forgot';

  /**
   * Initiate Password Reset.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * Allow a user to request a reset of his password.
   * An E-Mail with the Token will be sent, if we can find a user with the given E-Mail-Address.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPasswordForgotPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiPasswordForgotPost$Response(params: {
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Registered E-Mail-Address of the user who forgot the password. Must be a valid email address.
 */
'email': string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordResetService.ApiPasswordForgotPostPath, 'post');
    if (params) {
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
   * Initiate Password Reset.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * Allow a user to request a reset of his password.
   * An E-Mail with the Token will be sent, if we can find a user with the given E-Mail-Address.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPasswordForgotPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiPasswordForgotPost(params: {
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Registered E-Mail-Address of the user who forgot the password. Must be a valid email address.
 */
'email': string;
}
  }): Observable<void> {

    return this.apiPasswordForgotPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPasswordResetPost
   */
  static readonly ApiPasswordResetPostPath = '/api/password/reset';

  /**
   * Password Reset.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * Reset the password of the given user. It is required to initiate the request to receive the mail with the reset-token.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPasswordResetPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiPasswordResetPost$Response(params: {
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Token that was sent to the user via E-Mail.
 */
'token': string;

/**
 * Registered E-Mail-Address of the user who forgot the password.
 */
'email': string;

/**
 * New password for the user.
 */
'password': string;
}
  }): Observable<StrictHttpResponse<{
'success'?: boolean;
'message'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordResetService.ApiPasswordResetPostPath, 'post');
    if (params) {
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
        return r as StrictHttpResponse<{
        'success'?: boolean;
        'message'?: string;
        }>;
      })
    );
  }

  /**
   * Password Reset.
   *
   * <small class="badge badge-purple">App authorization available</small>
   *
   * Reset the password of the given user. It is required to initiate the request to receive the mail with the reset-token.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPasswordResetPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiPasswordResetPost(params: {
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * Token that was sent to the user via E-Mail.
 */
'token': string;

/**
 * Registered E-Mail-Address of the user who forgot the password.
 */
'email': string;

/**
 * New password for the user.
 */
'password': string;
}
  }): Observable<{
'success'?: boolean;
'message'?: string;
}> {

    return this.apiPasswordResetPost$Response(params).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
'message'?: string;
}>) => r.body as {
'success'?: boolean;
'message'?: string;
})
    );
  }

}
