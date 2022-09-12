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
    {field: 'name', render: 'string', headline: 'name'},
    {field: 'street', render: 'string', headline: 'street'},
    {field: 'postcode', render: 'string', headline: 'postcode'},
    {field: 'city', render: 'string', headline: 'city'},
    {field: 'opening_hours', render: 'openinghours', headline: 'opening_hours'},
  ];

}
