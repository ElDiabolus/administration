import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'card_id', render: 'string', headline: 'Kartennummer'},
    {field: 'gender', render: 'gender', headline: 'Geschlecht'},
    {field: 'age', render: 'string', headline: 'Alter'},
  ];

  @Input()
  routingPrefix: string;

  @Input()
  queryParameters;

  @Input()
  isSubHierarchy = false;

  ngOnInit(): void {
  }

}
