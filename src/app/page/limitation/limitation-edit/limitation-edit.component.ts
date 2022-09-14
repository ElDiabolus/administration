import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limitation-edit',
  templateUrl: './limitation-edit.component.html',
  styleUrls: ['./limitation-edit.component.scss']
})
export class LimitationEditComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'product_type_id', render: 'entity', headline: 'product_type_id', entityName: 'product-type', displayField:"Name"},
    {field: 'limitation_set_id', render: 'urlparameter', headline: 'limitation_set_id', urlparameter: 'parentid'},
    {field: 'limit', render: 'string', headline: 'Limit'},
  ];

  ngOnInit(): void {
  }

}
