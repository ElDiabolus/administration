import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../api/services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PasswordResetService} from "../../api/services/password-reset.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = "";
  pw: string = "";
  confirm_pw: string = "";

  public isDisplayResetPassword = false;
  public displaySuccess = false;

  public resetToken;

  constructor(
    protected authApiService: AuthenticationService,
    private route: ActivatedRoute,
    private passwordResetService: PasswordResetService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.resetToken = params.token;
    });
    if(localStorage.hasLogin)
    {
      this.router.navigate(['/card-list']);
    }
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
      window.location.reload();
    });

  }

  displayResetPassword(newState)
  {
    this.isDisplayResetPassword = newState;
  }

  forgotPassword()
  {
    let me = this;
    this.passwordResetService.apiPasswordForgotPost({body:{email:this.name}}).subscribe({
      complete(): void {
      }, error(err: any): void {
      }, next(value: void): void {
        me.displaySuccess = true;
        me.isDisplayResetPassword = false;
      }
    });
  }

  resetPassword()
  {
    let me = this;
    // @ts-ignore
    this.passwordResetService.apiPasswordResetPost({body:{token: this.resetToken, email:this.name, password: this.pw, password_confirmation: this.confirm_pw}}).subscribe({
      complete(): void {
      }, error(err: any): void {
      }, next(value: { success?: boolean; message?: string }): void {
        me.displaySuccess = true;
        me.resetToken = null;
      }
    });
  }

}
