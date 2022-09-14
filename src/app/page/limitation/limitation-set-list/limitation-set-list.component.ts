import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limitation-set-list',
  templateUrl: './limitation-set-list.component.html',
  styleUrls: ['./limitation-set-list.component.scss']
})
export class LimitationSetListComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'name', render: 'string', headline: 'Name'},
    {field: 'valid_from', render: 'string', headline: 'gültig von'},
    {field: 'valid_until', render: 'string', headline: 'gültig bis'},
  ];

  ngOnInit(): void {
  }

}
