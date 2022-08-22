import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders
} from '@angular/common/http';
import {AuthenticationService} from "../api/services/authentication.service";
import {catchError, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {CookieService} from "ng2-cookies";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(protected authApiService: AuthenticationService, protected cookieService: CookieService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      req = req.clone({
        withCredentials: true,
        headers: new HttpHeaders({
          //'Referer': window.location.hostname.split(":")[0],
          //'Authorization': 'Bearer ' + localStorage.token,
          'X-XSRF-TOKEN': this.cookieService.get("XSRF-TOKEN")
        })
      });



    // @ts-ignore
    return next.handle(req).pipe(catchError(response=> {
      console.log(response);
      if(response.status == 401)
      {
        delete localStorage.hasLogin;
      }

    }));
  }
}
