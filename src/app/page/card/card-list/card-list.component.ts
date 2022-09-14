import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'last_name', render: 'string', headline: 'Nachname'},
    {field: 'first_name', render: 'string', headline: 'Vorname'},
    {field: 'street', render: 'string', headline: 'Straße'},
    {field: 'postcode', render: 'string', headline: 'PLZ'},
    {field: 'city', render: 'string', headline: 'Stadt'},
    {field: 'valid_from', render: 'date', headline: 'gültig von', displayTime: false},
    {field: 'valid_until', render: 'date', headline: 'gültig bis', displayTime: false},
    {field: 'comment', render: 'string', headline: 'Kommentar'},
  ];

  ngOnInit(): void {
  }

}
