import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../../../api/services/organization.service";

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {

  constructor(protected organizationService : OrganizationService) { }

  ngOnInit(): void {
    this.organizationService.apiAdminOrganizationGet().toPromise().then(() => {

    });
  }

}
