import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'last_name', render: 'string', headline: 'last_name'},
    {field: 'first_name', render: 'string', headline: 'first_name'},
    {field: 'street', render: 'string', headline: 'street'},
    {field: 'postcode', render: 'string', headline: 'postcode'},
    {field: 'city', render: 'string', headline: 'city'},
    {field: 'valid_from', render: 'string', headline: 'valid_from'},
    {field: 'valid_until', render: 'string', headline: 'valid_until'},
    {field: 'comment', render: 'string', headline: 'comment'},
  ];

  ngOnInit(): void {
  }

}
