import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'card_id', render: 'hidden', headline: 'Kartennummer'},
    {field: 'gender', render: 'gender', headline: 'Geschlecht'},
    {field: 'age', render: 'input', headline: 'Alter', htmlType:'number'},
    {field: 'limitation_sets', render: 'entityarray', headline: 'Limitationsgruppe', entityName: 'limitation-set', displayField:"name"},
    {field: 'card_id', render: 'urlparameter', urlparameter: 'parentid'},
  ];

  ngOnInit(): void {
  }

}
