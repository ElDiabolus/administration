import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limitation-edit',
  templateUrl: './limitation-edit.component.html',
  styleUrls: ['./limitation-edit.component.scss']
})
export class LimitationEditComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'product_type_id', render: 'string', headline: 'product_type_id'},
    {field: 'limitation_set_id', render: 'string', headline: 'limitation_set_id'},
    {field: 'limit', render: 'string', headline: 'limit'},
  ];

  ngOnInit(): void {
  }

}
