import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'card_id', render: 'string', headline: 'card_id'},
    {field: 'gender', render: 'string', headline: 'gender'},
    {field: 'age', render: 'string', headline: 'age'},
  ];

  ngOnInit(): void {
  }

}
