import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.scss']
})
export class VisitListComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'card__first_name', render: 'string', headline: 'id'},
    {field: 'card__last_name', render: 'string', headline: 'id'},
    {field: 'updated_at', render: 'string', headline: 'id'},
  ];

  ngOnInit(): void {
  }

}
