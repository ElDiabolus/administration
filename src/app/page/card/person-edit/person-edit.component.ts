import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'card_id', render: 'hidden', headline: 'card_id'},
    {field: 'gender', render: 'string', headline: 'gender'},
    {field: 'age', render: 'input', headline: 'age', htmlType:'number'},
    {field: 'limitation_sets', render: 'entityarray', headline: 'limitation_sets', entityName: 'limitation-set', displayField:"name"},
  ];

  ngOnInit(): void {
  }

}
