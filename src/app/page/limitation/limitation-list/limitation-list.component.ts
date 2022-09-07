import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-limitation-list',
  templateUrl: './limitation-list.component.html',
  styleUrls: ['./limitation-list.component.scss']
})
export class LimitationListComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'product_type__name', render: 'string', headline: 'product_type__name'},
    {field: 'product_type__icon', render: 'string', headline: 'product_type__icon'},
    {field: 'limit', render: 'string', headline: 'limit'},
  ];

  @Input()
  queryParameters;

  @Input()
  isSubHierarchy = false;

  ngOnInit(): void {
  }

}
