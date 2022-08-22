import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./api/services/authentication.service";
import {CookieService} from "ng2-cookies";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'caritas-administration';

  constructor(protected authApiService: AuthenticationService, protected cookieService: CookieService) {
  }

  public appInitialized: boolean = false;

  isLoggedIn()
  {
    return localStorage.hasLogin == 1;
  }

  ngOnInit(): void {

    let me = this;
    this.authApiService.apiAuthHeartbeatGet().subscribe({
      next(value: any): void {
        sessionStorage.authInfo = JSON.stringify(value);
        me.appInitialized = true;
        console.log("HEARTBEAT");
        console.log(value);
      },
      error(err: any): void {
        me.appInitialized = true;
        //handled by AuthInterceptor
      }
    });

    this.authApiService.apiHandshakeGet().toPromise().then(() => {
      console.log("handshaked");
    });
  }
}
