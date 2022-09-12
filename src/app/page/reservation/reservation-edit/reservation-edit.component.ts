import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.scss']
})
export class ReservationEditComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'time', render: 'datetime', headline: 'time'},
    {field: 'shop_id', render: 'entity', headline: 'shop', entityName: 'shop', displayField:"name"},
    {field: 'card_id', render: 'string', headline: 'card_id'},
  ];

  ngOnInit(): void {
  }

}
