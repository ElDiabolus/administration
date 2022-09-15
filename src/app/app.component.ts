import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./api/services/authentication.service";
import {CookieService} from "ng2-cookies";
import {PrivilegeService} from "./privilege.service";
import {Router} from "@angular/router";

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
              public privilegeService: PrivilegeService,
              private router: Router
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
      if(localStorage.hasLogin != 1 && me.router.url != '/login' && this.router.url.indexOf("/reset") !== 0)
      {
        me.router.navigate(['login']);
      }
    });
  }

  logout()
  {
    let me = this;
    this.authApiService.apiAuthLogoutPost().subscribe({
      complete(): void {
        delete localStorage.hasLogin;
        me.router.navigate(['/login']);
      }
    });
  }
}
