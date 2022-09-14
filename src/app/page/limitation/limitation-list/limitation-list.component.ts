import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-limitation-list',
  templateUrl: './limitation-list.component.html',
  styleUrls: ['./limitation-list.component.scss']
})
export class LimitationListComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'product_type__name', render: 'string', headline: 'Produkttyp'},
    {field: 'limit', render: 'string', headline: 'Limit'},
  ];

  @Input()
  queryParameters;

  @Input()
  isSubHierarchy = false;

  ngOnInit(): void {
  }

}
