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

  public renderOptions = [
    {field: 'name', render: 'string', headline: 'name'},
    {field: 'street', render: 'string', headline: 'street'},
    {field: 'postcode', render: 'string', headline: 'postcode'},
    {field: 'city', render: 'string', headline: 'city'},
    {field: 'contact', render: 'string', headline: 'contact'},
  ];

  public organization: any;

  public listQueryParams;

  ngOnInit(): void {
    let me = this;
    this.route.params.subscribe(params => {
      if(params.hasOwnProperty("id"))
      {
        me.listQueryParams = {organization_id: params.id};
      }
    });
  }
}
