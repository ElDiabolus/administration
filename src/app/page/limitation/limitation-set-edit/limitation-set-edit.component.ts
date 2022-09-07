import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-limitation-set-edit',
  templateUrl: './limitation-set-edit.component.html',
  styleUrls: ['./limitation-set-edit.component.scss']
})
export class LimitationSetEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  public renderOptions = [
    {field: 'name', render: 'string', headline: 'name'},
    {field: 'valid_from', render: 'string', headline: 'valid_from'},
    {field: 'valid_until', render: 'string', headline: 'valid_until'},
  ];

  public listQueryParams;

  public parentId;

  public id;

  ngOnInit(): void {
    let me = this;
    this.route.params.subscribe(params => {
      if(params.hasOwnProperty("id"))
      {
        me.listQueryParams = {limitation_set_id: params.id};
        me.id = params.id;
      }
    });
  }

}
