import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,
                private router: Router) { }

  public renderOptions = [
    {field: 'last_name', render: 'string', headline: 'Nachname'},
    {field: 'first_name', render: 'string', headline: 'Vorname'},
    {field: 'street', render: 'string', headline: 'Straße'},
    {field: 'postcode', render: 'string', headline: 'PLZ'},
    {field: 'city', render: 'string', headline: 'Stadt'},
    {field: 'valid_from', render: 'datetime', headline: 'gültig von'},
    {field: 'valid_until', render: 'datetime', headline: 'gültig bis'},
    {field: 'comment', render: 'string', headline: 'Kommentar'},
    {field: 'id', render: 'cardpdf'},
  ];

  public listQueryParams;

  ngOnInit(): void {
    let me = this;
    this.route.params.subscribe(params => {
      if(params.hasOwnProperty("id"))
      {
        me.listQueryParams = {card_id: params.id};
      }
    });
  }

}
