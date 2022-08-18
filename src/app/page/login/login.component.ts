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
    this.authApiService.apiHandshakeGet().toPromise().then(() => {
      console.log("SHAKED");
    });
  }

  login()
  {
    this.authApiService.apiAuthTokenPost({
      body: {

        'email': this.name,
        'password': this.pw,
        device_name: "Angular Web Device"
      }
    }).toPromise().then(() => {
      console.log("SF");
    });
  }

}
