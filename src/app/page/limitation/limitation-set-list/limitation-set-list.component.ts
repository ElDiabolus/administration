import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limitation-set-list',
  templateUrl: './limitation-set-list.component.html',
  styleUrls: ['./limitation-set-list.component.scss']
})
export class LimitationSetListComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'name', render: 'string', headline: 'name'},
    {field: 'valid_from', render: 'string', headline: 'valid_from'},
    {field: 'valid_until', render: 'string', headline: 'valid_until'},
  ];

  ngOnInit(): void {
  }

}
