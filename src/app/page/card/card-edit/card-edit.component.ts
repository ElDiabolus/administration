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
    {field: 'last_name', render: 'string', headline: 'last_name'},
    {field: 'first_name', render: 'string', headline: 'first_name'},
    {field: 'street', render: 'string', headline: 'street'},
    {field: 'postcode', render: 'string', headline: 'postcode'},
    {field: 'city', render: 'string', headline: 'city'},
    {field: 'valid_from', render: 'datetime', headline: 'valid_from'},
    {field: 'valid_until', render: 'datetime', headline: 'valid_until'},
    {field: 'comment', render: 'string', headline: 'comment'},
    {field: 'id', render: 'cardpdf', headline: 'download'},
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
