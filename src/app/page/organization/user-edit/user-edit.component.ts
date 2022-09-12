import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public renderOptions = [
    {field: 'name', render: 'string', headline: 'name'},
    {field: 'email', render: 'input', htmlType:"email", headline: 'email'},
    {field: 'password', render: 'password', headline: 'password'},
    {field: 'password_confirmation', render: 'password', headline: 'password confirmation'},
    {field: 'roles', render: 'role', headline: 'role', targetField: 'role'},
    {field: 'organization_id', render: 'urlparameter', headline: 'organization_id', urlparameter: 'parentid'},
  ];
}
