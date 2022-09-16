import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.scss']
})
export class ReservationEditComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'time', render: 'datetime', headline: 'Zeit'},
    {field: 'shop_id', render: 'entity', headline: 'Laden', entityName: 'shop', displayField:"name"},
    {field: 'card_id', render: 'string', headline: 'Kartennummer'},
  ];

  ngOnInit(): void {
  }

}
