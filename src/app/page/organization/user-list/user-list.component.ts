import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {



  public renderOptions = [
    {field: 'name', render: 'string', headline: 'name'},
    {field: 'email', render: 'mail', headline: 'mail'}
  ];

  @Input()
  routingPrefix: string;

  @Input()
  queryParameters;

  @Input()
  isSubHierarchy = false;

  constructor() { }

  ngOnInit(): void {
  }


}
