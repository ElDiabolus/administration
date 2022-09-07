import {Component, Input, OnInit} from '@angular/core';
import {ApiOverviewService} from "../../api-overview.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-standard-form',
  templateUrl: './standard-form.component.html',
  styleUrls: ['./standard-form.component.scss']
})
export class StandardFormComponent implements OnInit {
  public entity;

  constructor(private apiOverview: ApiOverviewService, private route: ActivatedRoute,
              private router: Router) { }

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
        this.setUrlParameters(params);
        return;
      }



      let requestParams = {};
      requestParams[this.idParameterField] = params.id;
      this.apiService[apiCall](requestParams).subscribe({
        next(value: void): void {
          me.entity = value;
        },
        error(err: any): void {
        }
      });
    });
  }

  setUrlParameters(urlParams)
  {
    for(const renderOption of this.renderOptions)
    {

      if(renderOption.render == 'urlparameter')
      {
        let paramVal = urlParams[renderOption.urlparameter];
        this.entity[renderOption.field] = paramVal;
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

    if(this.entity.hasOwnProperty("id"))
    {
      let apiCall = this.apiOverview.getApiMethodName(this.entityName, 'IdPut', this.customApiPath);
      let callParams = {};
      callParams[this.idParameterField] = this.entity.id;
      // @ts-ignore
      callParams.body = this.entity;
      console.log(apiCall);
      console.log(callParams);
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
