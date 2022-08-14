import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../../../api/services/organization.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(protected organizationService: OrganizationService) {

  }

  ngOnInit(): void {
    this.organizationService.apiAdminOrganizationGet().toPromise().then(() => {

    });
  }

}
