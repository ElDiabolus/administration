import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-renderer',
  templateUrl: './date-renderer.component.html',
  styleUrls: ['./date-renderer.component.scss']
})
export class DateRendererComponent implements OnInit {

  constructor() { }

  @Input()
  public value: Date;

  @Input()
  public displayTime: boolean;

  public formattedValue: string;

  ngOnInit(): void {
    let formattedValue;
    if(this.displayTime)
    {
      formattedValue = (new Date(this.value)).toLocaleString();
    }
    else
    {
      formattedValue = (new Date(this.value)).toLocaleDateString();
    }
    this.formattedValue = formattedValue;
  }

}
