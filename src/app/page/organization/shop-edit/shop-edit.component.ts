import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public renderOptions = [
    {field: 'name', render: 'string', headline: 'Name'},
    {field: 'street', render: 'string', headline: 'Straße'},
    {field: 'postcode', render: 'string', headline: 'PLZ'},
    {field: 'city', render: 'string', headline: 'Stadt'},
    {field: 'contact', render: 'string', headline: 'Kontaktmöglichkeit'},
    {field: 'opening_hours', render: 'openinghours', headline: 'Öffnungszeiten'},
    {field: 'organization_id', render: 'urlparameter', headline: 'organization_id', urlparameter: 'parentid'},
  ];

}
