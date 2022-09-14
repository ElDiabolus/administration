import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./api/services/authentication.service";
import {CookieService} from "ng2-cookies";
import {PrivilegeService} from "./privilege.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'caritas-administration';

  constructor(
              protected authApiService: AuthenticationService,
              protected cookieService: CookieService,
              public privilegeService: PrivilegeService
  ) {
  }

  public appInitialized: boolean = false;

  isLoggedIn()
  {
    return localStorage.hasLogin == 1;
  }

  ngOnInit(): void {

    let me = this;
    if(localStorage.hasLogin == "1") {
      this.authApiService.apiAuthHeartbeatGet().subscribe({
        next(value: any): void {
          sessionStorage.authInfo = JSON.stringify(value);
          me.appInitialized = true;
        },
        error(err: any): void {
          me.appInitialized = true;
          //handled by AuthInterceptor
        }
      });
    }
    else
    {
      me.appInitialized = true;
    }

    this.authApiService.apiHandshakeGet().toPromise().then(() => {

    });
  }

  logout()
  {
    this.authApiService.apiAuthLogoutPost().subscribe({
      complete(): void {
        delete localStorage.hasLogin;
      }
    });
  }
}
