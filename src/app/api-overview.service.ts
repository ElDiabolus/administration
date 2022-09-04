import { Injectable } from '@angular/core';
import {OrganizationService} from "./api/services/organization.service";
import {throwError} from "rxjs";
import {CardService} from "./api/services/card.service";
import {LimitationService} from "./api/services/limitation.service";
import {LimitationSetService} from "./api/services/limitation-set.service";
import {PersonService} from "./api/services/person.service";

@Injectable({
  providedIn: 'root'
})
export class ApiOverviewService {

  constructor(protected organizationService: OrganizationService,
              protected cardService: CardService,
              protected limitationService: LimitationService,
              protected limitationSetService: LimitationSetService,
              protected personService: PersonService) {

  }

  private dashesToCamelCase(str: string)
  {
    return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
  }

  public getServiceByEntityName(entityName: string)
  {
    entityName = this.dashesToCamelCase(entityName);
    if(this.hasOwnProperty(entityName+'Service'))
    {
      return this[entityName+'Service'];
    }
    else
    {
      throwError("service "+entityName+'Service not found');
    }
  }

  // @ts-ignore
  public getApiMethodName(entityName: string, apiMethod: string, customApiPath?: string)
  {
    entityName = this.dashesToCamelCase(entityName);
    if(!['Get', 'Post', 'IdGet', 'IdPut', 'IdDelete'].includes(apiMethod))
    {
      return null;
    }

    let callName = 'apiAdmin'+entityName.charAt(0).toUpperCase()+entityName.slice(1)+apiMethod;

    if(customApiPath != null)
    {
      callName = 'apiAdmin'+customApiPath+apiMethod;
    }
    console.log("callName");
    console.log(callName);
    if(typeof this.getServiceByEntityName(entityName)[callName] === 'function')
    {
      return callName;
    }
    else
    {
      console.log("ERR00");
      throwError("call "+callName+" not found on entity "+entityName);
    }
  }
}
