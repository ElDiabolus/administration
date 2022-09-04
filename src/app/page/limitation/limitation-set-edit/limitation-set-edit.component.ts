import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limitation-set-edit',
  templateUrl: './limitation-set-edit.component.html',
  styleUrls: ['./limitation-set-edit.component.scss']
})
export class LimitationSetEditComponent implements OnInit {

  constructor() { }

  public renderOptions = [
    {field: 'name', render: 'string', headline: 'name'},
    {field: 'valid_from', render: 'string', headline: 'valid_from'},
    {field: 'valid_until', render: 'string', headline: 'valid_until'},
  ];

  ngOnInit(): void {
  }

}
