import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'card_id', render: 'string', headline: 'card_id'},
    {field: 'gender', render: 'string', headline: 'gender'},
    {field: 'age', render: 'string', headline: 'age'},
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
