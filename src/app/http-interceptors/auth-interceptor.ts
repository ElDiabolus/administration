import { Injectable } from '@angular/core';

import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders
} from '@angular/common/http';
import {AuthenticationService} from "../api/services/authentication.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(protected authApiService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      withCredentials: true,
      headers: new HttpHeaders({
        'Referer': 'window.location.hostname'
      })
    });

    console.log("INTERCEPTEDDDDD");
    console.log(req);
    if(req.url.indexOf("api/auth/") === -1 && req.url.indexOf("api/handshake") === -1)
    {

    }



    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log("RESPÖNSE");
        if(event.status == 419)
        {
          this.authApiService.apiHandshakeGet().toPromise().then(() => {
            console.log("SHAKED");
          });
        }
      }
      return event;
    }));
  }
}
