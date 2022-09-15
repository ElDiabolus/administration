import {Component, Input, OnInit} from '@angular/core';
import {ApiOverviewService} from "../../api-overview.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PrivilegeService} from "../../privilege.service";

@Component({
  selector: 'app-standard-form',
  templateUrl: './standard-form.component.html',
  styleUrls: ['./standard-form.component.scss']
})
export class StandardFormComponent implements OnInit {
  public entity;

  constructor(private apiOverview: ApiOverviewService, private route: ActivatedRoute,
              private router: Router, public privilegeService: PrivilegeService) { }

  @Input()
  public entityName;

  @Input()
  public renderOptions;

  @Input()
  public customApiPath;

  @Input()
  public customApiPathPost;

  @Input()
  public customReturnPath;

  @Input()
  public idParameterField;

  @Input()
  public savePermission = '';

  @Input()
  public deletePermission = '';

  protected apiService;

  ngOnInit(): void {
    let me = this;
    this.apiService = this.apiOverview.getServiceByEntityName(this.entityName);
    let apiCall = this.apiOverview.getApiMethodName(this.entityName, 'IdGet', this.customApiPath);
    console.log("apiCall");
    console.log(apiCall);
    this.route.params.subscribe(params => {

      if(!me.customReturnPath && params.hasOwnProperty("parentid"))
      {
        let parentid = params.parentid;
        let topentity = params.topentity;
        me.customReturnPath = '/'+topentity+"/"+parentid;
      }

      if(!params.hasOwnProperty("id"))
      {
        this.entity = {};
        this.setAdditionalParameters(params);
        this.handleOpeningHours();

        return;
      }



      let requestParams = {};
      requestParams[this.idParameterField] = params.id;
      this.apiService[apiCall](requestParams).subscribe({
        next(value: void): void {
          me.entity = value;
          if(me.entity.roles) {
            me.entity.role = me.entity.roles[0];
          }
          me.convertTimes();
          me.handleOpeningHours();
        },
        error(err: any): void {
        }
      });
    });
  }

  convertTimes()
  {
    for(const renderOption of this.renderOptions)
    {
      if(renderOption.render == 'datetime')
      {
        let utcDateTime = new Date(this.entity[renderOption.field]);
        let htmlFormatDateTime = new Date(utcDateTime.getTime()-utcDateTime.getTimezoneOffset()*60*1000);
        this.entity[renderOption.field] = htmlFormatDateTime.toISOString().split(".")[0].replace("T", " ");
      }
    }
  }

  handleOpeningHours()
  {
    for(const renderOption of this.renderOptions)
    {
      if(renderOption.render == 'openinghours')
      {
        if(!this.entity.hasOwnProperty(renderOption.field))
        {
          this.entity[renderOption.field] = {};
        }
        let defaultObject = {opens_at:'00:00', closes_at:'00:00', slots:0};
        for(const day of ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'])
        {
          console.log(renderOption);
          console.log(this.entity);
          if(!this.entity[renderOption.field].hasOwnProperty(day))
          {
            this.entity[renderOption.field][day] = [Object.assign({}, defaultObject)];
          }
        }
      }
    }
  }

  setAdditionalParameters(urlParams)
  {
    for(const renderOption of this.renderOptions)
    {
      if(renderOption.render == 'urlparameter')
      {
        let paramVal = urlParams[renderOption.urlparameter];
        this.entity[renderOption.field] = paramVal;
      }

      if(renderOption.render == 'role')
      {
        //this.entity[renderOption.field] = 'inactive';
      }
      if(renderOption.render == 'entityarray')
      {
        this.entity[renderOption.field] = [];
      }
    }
  }

  save() {
    let me = this;
    let responseObserver = {
      next(value: void): void {
        if(me.customReturnPath) {
          me.router.navigate([me.customReturnPath]);
        }
        else
        {
          me.router.navigate(['/'+me.entityName+'-list']);
        }
      },
      error(err: any): void {
      }
    };

    for(const renderOption of this.renderOptions)
    {
      if(renderOption.render == 'openinghours')
      {
        for(const day in this.entity[renderOption.field])
        {
          console.log("KAILLING"+day);
          console.log(this.entity[renderOption.field]);
          console.log(this.entity[renderOption.field][day]);
          if(this.entity[renderOption.field][day][0].slots < 1)
          {
            console.log("KILLING"+day);
            delete this.entity[renderOption.field][day];
          }
        }
      }
    }

    if(this.entity.hasOwnProperty("id"))
    {
      let apiCall = this.apiOverview.getApiMethodName(this.entityName, 'IdPut', this.customApiPath);
      let callParams = {};
      callParams[this.idParameterField] = this.entity.id;
      // @ts-ignore
      callParams.body = this.entity;
      this.apiService[apiCall](callParams).subscribe(responseObserver);
    }
    else
    {
      let apiCall = this.apiOverview.getApiMethodName(this.entityName, 'Post', this.customApiPathPost);
      this.apiService[apiCall]({body: this.entity}).subscribe(responseObserver);
    }

  }

  delete()
  {
    var me = this;
    let apiCall = this.apiOverview.getApiMethodName(this.entityName, 'IdDelete', this.customApiPath);
    let callParams = {};
    callParams[this.idParameterField] = this.entity.id;
    this.apiService[apiCall](callParams).subscribe({
      next(value: void): void {
        if(me.customReturnPath) {
          me.router.navigate([me.customReturnPath]);
        }
        else
        {
          me.router.navigate(['/'+me.entityName+'-list']);
        }
      },
      error(err: any): void {
      }
    });
  }

}
