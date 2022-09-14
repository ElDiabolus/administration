import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'name', render: 'string', headline: 'Name'},
    {field: 'street', render: 'string', headline: 'Straße'},
    {field: 'postcode', render: 'string', headline: 'PLZ'},
    {field: 'city', render: 'string', headline: 'Stadt'},
  ];

  @Input()
  routingPrefix: string;

  @Input()
  queryParameters;

  @Input()
  isSubHierarchy = false;

  ngOnInit(): void {
  }

}
