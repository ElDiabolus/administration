import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.scss']
})
export class LineItemEditComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'visit_id', render: 'urlparameter', headline: 'visit_id', urlparameter: 'parentid', display:false},
    {field: 'product_type_id', render: 'entity', headline: 'product_type_id', entityName: 'product-type', displayField:"name"},
    {field: 'person_id', render: 'entity', headline: 'person_id', entityName: 'person', displayField:"gender"},//TODO filter query
  ];

  ngOnInit(): void {
  }

}
