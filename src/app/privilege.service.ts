import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeService {

  constructor() { }

  hasPrivelege(privelegeType:  string)
  {
    if(privelegeType == '')
      return true;

    if(sessionStorage.authInfo === null)
      return false;
    let authInfo = JSON.parse(sessionStorage.authInfo);
    let permissions = authInfo.user.permissions;

    return permissions.includes(privelegeType);
  }
}
