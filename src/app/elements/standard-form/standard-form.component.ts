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
      if(!params.hasOwnProperty("id"))
      {
        this.entity = {};
        return;
      }
      let me = this;
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

  save() {

    let responseObserver = {
      next(value: void): void {
      },
      error(err: any): void {
      }
    };

    if(this.entity.hasOwnProperty("id"))
    {
      let apiCall = this.apiOverview.getApiMethodName(this.entityName, 'IdPut', this.customApiPath);
      this.apiService[apiCall]({id: this.entity.id, body: this.entity}).subscribe(responseObserver);
    }
    else
    {
      let apiCall = this.apiOverview.getApiMethodName(this.entityName, 'Post', this.customApiPath);
      this.apiService[apiCall]({body: this.entity}).subscribe(responseObserver);
    }

  }

  delete()
  {
    var me = this;
    let apiCall = this.apiOverview.getApiMethodName(this.entityName, 'IdDelete', this.customApiPath);
    this.apiService[apiCall]({id: this.entity.id}).subscribe({
      next(value: void): void {
        me.router.navigate(['organization-list']);
      },
      error(err: any): void {
      }
    });
  }

}
