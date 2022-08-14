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
export class AuthenticationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiHandshakeGet
   */
  static readonly ApiHandshakeGetPath = '/api/handshake';

  /**
   * Create session and XSRF-Token.
   *
   * Required to initialise a new Cookie-Session for SPAs.
   * Do not use this endpoint if you want to use Token-Auth.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHandshakeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHandshakeGet$Response(params?: {
    'Content-Type'?: string;
    Accept?: string;
    Referer?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.ApiHandshakeGetPath, 'get');
    if (params) {
      rb.header('Content-Type', params['Content-Type'], {});
      rb.header('Accept', params.Accept, {});
      rb.header('Referer', params.Referer, {});
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
   * Create session and XSRF-Token.
   *
   * Required to initialise a new Cookie-Session for SPAs.
   * Do not use this endpoint if you want to use Token-Auth.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiHandshakeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHandshakeGet(params?: {
    'Content-Type'?: string;
    Accept?: string;
    Referer?: string;
  }): Observable<void> {

    return this.apiHandshakeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAuthLoginPost
   */
  static readonly ApiAuthLoginPostPath = '/api/auth/login';

  /**
   * Login with SPA-Session (Cookies).
   *
   * After you send a GET-request to <code>/api/handshake</code>, which will create the Session and give you a XSRF-Token,
   * you can send your Credentials to this endpoint and authenticate your session.
   *
   * All further requests are now authenticated through cookies and do not require an Authorization-Header.
   *
   * <aside class="warning">
   *   If you get an Error 419, make sure your Request contains the X-XSRF-TOKEN header.
   *   <p>
   *     You can enable this in axios with the following line:
   *     <pre style="float: none; width: 100%;"><code>axios.defaults.withCredentials = true;</code></pre>
   *   </p>
   * </aside>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAuthLoginPost$Response(params: {
    'Content-Type'?: string;
    Accept?: string;
    Referer?: string;
    'X-XSRF-TOKEN'?: string;
    body: {

/**
 * E-Mail of the user. Must be a valid email address.
 */
'email': string;

/**
 * Password of the user.
 */
'password': string;
}
  }): Observable<StrictHttpResponse<{
'success'?: boolean;
'user'?: {
};
}>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.ApiAuthLoginPostPath, 'post');
    if (params) {
      rb.header('Content-Type', params['Content-Type'], {});
      rb.header('Accept', params.Accept, {});
      rb.header('Referer', params.Referer, {});
      rb.header('X-XSRF-TOKEN', params['X-XSRF-TOKEN'], {});
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
        'user'?: {
        };
        }>;
      })
    );
  }

  /**
   * Login with SPA-Session (Cookies).
   *
   * After you send a GET-request to <code>/api/handshake</code>, which will create the Session and give you a XSRF-Token,
   * you can send your Credentials to this endpoint and authenticate your session.
   *
   * All further requests are now authenticated through cookies and do not require an Authorization-Header.
   *
   * <aside class="warning">
   *   If you get an Error 419, make sure your Request contains the X-XSRF-TOKEN header.
   *   <p>
   *     You can enable this in axios with the following line:
   *     <pre style="float: none; width: 100%;"><code>axios.defaults.withCredentials = true;</code></pre>
   *   </p>
   * </aside>
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAuthLoginPost(params: {
    'Content-Type'?: string;
    Accept?: string;
    Referer?: string;
    'X-XSRF-TOKEN'?: string;
    body: {

/**
 * E-Mail of the user. Must be a valid email address.
 */
'email': string;

/**
 * Password of the user.
 */
'password': string;
}
  }): Observable<{
'success'?: boolean;
'user'?: {
};
}> {

    return this.apiAuthLoginPost$Response(params).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
'user'?: {
};
}>) => r.body as {
'success'?: boolean;
'user'?: {
};
})
    );
  }

  /**
   * Path part for operation apiAuthTokenPost
   */
  static readonly ApiAuthTokenPostPath = '/api/auth/token';

  /**
   * Login with Bearer Token (Authorization Header).
   *
   * If you are not able to use Cookies, for example in a mobile application, you can use Token-Auth instead.
   * Tokens will be valid for 20 hours before they expire.
   *
   * <aside class="warning">
   *   Endpoints under the <code>/admin</code> path will not be available for Applications using Token-Auth.
   * </aside>
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthTokenPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAuthTokenPost$Response(params: {
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * E-Mail of the user. Must be a valid email address.
 */
'email': string;

/**
 * Password of the user.
 */
'password': string;

/**
 * Name of the device, used for identification of the token.
 */
'device_name': string;
}
  }): Observable<StrictHttpResponse<{
'success'?: boolean;
'token'?: string;
'user'?: {
};
}>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.ApiAuthTokenPostPath, 'post');
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
        'token'?: string;
        'user'?: {
        };
        }>;
      })
    );
  }

  /**
   * Login with Bearer Token (Authorization Header).
   *
   * If you are not able to use Cookies, for example in a mobile application, you can use Token-Auth instead.
   * Tokens will be valid for 20 hours before they expire.
   *
   * <aside class="warning">
   *   Endpoints under the <code>/admin</code> path will not be available for Applications using Token-Auth.
   * </aside>
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthTokenPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAuthTokenPost(params: {
    'Content-Type'?: string;
    Accept?: string;
    body: {

/**
 * E-Mail of the user. Must be a valid email address.
 */
'email': string;

/**
 * Password of the user.
 */
'password': string;

/**
 * Name of the device, used for identification of the token.
 */
'device_name': string;
}
  }): Observable<{
'success'?: boolean;
'token'?: string;
'user'?: {
};
}> {

    return this.apiAuthTokenPost$Response(params).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
'token'?: string;
'user'?: {
};
}>) => r.body as {
'success'?: boolean;
'token'?: string;
'user'?: {
};
})
    );
  }

  /**
   * Path part for operation apiAuthLogoutPost
   */
  static readonly ApiAuthLogoutPostPath = '/api/auth/logout';

  /**
   * Logout.
   *
   * Invalidate your current session/token
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLogoutPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthLogoutPost$Response(params?: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<StrictHttpResponse<{
'success'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.ApiAuthLogoutPostPath, 'post');
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
        return r as StrictHttpResponse<{
        'success'?: boolean;
        }>;
      })
    );
  }

  /**
   * Logout.
   *
   * Invalidate your current session/token
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthLogoutPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthLogoutPost(params?: {
    Authorization?: string;
    'Content-Type'?: string;
    Accept?: string;
  }): Observable<{
'success'?: boolean;
}> {

    return this.apiAuthLogoutPost$Response(params).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
}>) => r.body as {
'success'?: boolean;
})
    );
  }

}
