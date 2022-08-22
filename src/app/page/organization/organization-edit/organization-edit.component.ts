import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../../../api/services/organization.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.scss']
})
export class OrganizationEditComponent implements OnInit {

  constructor(
    protected organizationApiService: OrganizationService,
    private route: ActivatedRoute,
    private router: Router)
  {

  }

  public organization: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(!params.hasOwnProperty("id"))
      {
        this.organization = {instance_id: JSON.parse(sessionStorage.authInfo).user.instance.id};
        return;
      }
      let me = this;
      this.organizationApiService.apiAdminOrganizationIdGet({id: params.id}).subscribe({
        next(value: void): void {
          me.organization = value;
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

    if(this.organization.hasOwnProperty("id"))
    {
      this.organizationApiService.apiAdminOrganizationIdPut({id: this.organization.id, body: this.organization}).subscribe(responseObserver);
    }
    else
    {
      this.organizationApiService.apiAdminOrganizationPost({body: this.organization}).subscribe(responseObserver);
    }

  }

  delete()
  {
    var me = this;
    this.organizationApiService.apiAdminOrganizationIdDelete({id: this.organization.id}).subscribe({
      next(value: void): void {
        me.router.navigate(['organization-list']);
      },
      error(err: any): void {
      }
    });
  }
}
