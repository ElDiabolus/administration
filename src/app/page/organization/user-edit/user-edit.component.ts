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
    {field: 'name', render: 'string', headline: 'Name'},
    {field: 'email', render: 'input', htmlType:"email", headline: 'E-Mail'},
    {field: 'password', render: 'password', headline: 'Passwort'},
    {field: 'password_confirmation', render: 'password', headline: 'Passwortwiederholung'},
    {field: 'roles', render: 'role', headline: 'Rolle', targetField: 'role'},
    {field: 'organization_id', render: 'urlparameter', headline: 'organization_id', urlparameter: 'parentid'},
  ];
}
