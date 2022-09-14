import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../api/services/authentication.service";
import {ActivatedRoute} from "@angular/router";
import {PasswordResetService} from "../../api/services/password-reset.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = "";
  pw: string = "";

  public isDisplayResetPassword = false;

  constructor(protected authApiService: AuthenticationService, private route: ActivatedRoute, private passwordResetService: PasswordResetService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }

  login()
  {
    this.authApiService.apiAuthLoginPost({
      body: {

        'email': this.name,
        'password': this.pw,
        //device_name: "Angular Web Device"
      }
    }).toPromise().then((resp) => {
      localStorage.hasLogin = 1;
    });

  }

  displayResetPassword()
  {
    this.isDisplayResetPassword = true;
    //TODO
  }

  resetPassword()
  {
    this.passwordResetService.apiPasswordForgotPost({body:{email:this.name}}).subscribe({
      complete(): void {
      }, error(err: any): void {
      }, next(value: void): void {
        //TODO
      }
    });
  }

}
