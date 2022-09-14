import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-visit-edit',
  templateUrl: './visit-edit.component.html',
  styleUrls: ['./visit-edit.component.scss']
})
export class VisitEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public listQueryParams;

  public parentId;

  public id;

  public renderOptions = [
    {field: 'card_id', render: 'string', headline: 'Kartennummer', readOnly: true},
  ];

  ngOnInit(): void {
    let me = this;
    this.route.params.subscribe(params => {
      if(params.hasOwnProperty("id"))
      {
        me.listQueryParams = {visit_id: params.id};
        me.id = params.id;
      }
    });
  }



}
