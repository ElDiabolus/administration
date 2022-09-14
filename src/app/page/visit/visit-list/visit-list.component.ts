import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.scss']
})
export class VisitListComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'card__first_name', render: 'string', headline: 'Vorname'},
    {field: 'card__last_name', render: 'string', headline: 'Nachname'},
    {field: 'updated_at', render: 'date', headline: 'Datum und Uhrzeit', displayTime: true},
  ];

  ngOnInit(): void {
  }

}
