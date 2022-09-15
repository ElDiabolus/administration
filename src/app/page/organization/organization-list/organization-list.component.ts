import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'name', render: 'string', headline: 'Name'},
    {field: 'street', render: 'string', headline: 'Straße'},
    {field: 'postcode', render: 'string', headline: 'PLZ'},
    {field: 'city', render: 'string', headline: 'Stadt'},
    {field: 'contact', render: 'string', headline: 'Kontaktmöglichkeit'},
  ];

  ngOnInit(): void {
  }

}
