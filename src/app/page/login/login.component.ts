import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../api/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = "";
  pw: string = "";

  constructor(protected authApiService: AuthenticationService) { }

  ngOnInit(): void {
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

}
