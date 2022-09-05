import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-type-edit',
  templateUrl: './product-type-edit.component.html',
  styleUrls: ['./product-type-edit.component.scss']
})
export class ProductTypeEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public renderOptions = [
    {field: 'name', render: 'string', headline: 'name'},
    {field: 'icon', render: 'string', headline: 'icon'}
  ];

}
