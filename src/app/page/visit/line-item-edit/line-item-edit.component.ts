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
    {field: 'product_type_id', render: 'entity', headline: 'Produkttyp', entityName: 'product-type', displayField:"name"},
    {field: 'person_id', render: 'entity', headline: 'Person', entityName: 'person', displayField:"gender"},
  ];

  ngOnInit(): void {
  }

}
