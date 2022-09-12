import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'last_name', render: 'string', headline: 'last_name'},
    {field: 'first_name', render: 'string', headline: 'first_name'},
    {field: 'street', render: 'string', headline: 'street'},
    {field: 'postcode', render: 'string', headline: 'postcode'},
    {field: 'city', render: 'string', headline: 'city'},
    {field: 'valid_from', render: 'date', headline: 'valid_from', displayTime: false},
    {field: 'valid_until', render: 'date', headline: 'valid_until', displayTime: false},
    {field: 'comment', render: 'string', headline: 'comment'},
  ];

  ngOnInit(): void {
  }

}
