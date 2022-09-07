import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'name', render: 'string', headline: 'name'},
    {field: 'street', render: 'string', headline: 'street'},
    {field: 'postcode', render: 'string', headline: 'postcode'},
    {field: 'city', render: 'string', headline: 'city'},
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
