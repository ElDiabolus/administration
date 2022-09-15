import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gender-renderer',
  templateUrl: './gender-renderer.component.html',
  styleUrls: ['./gender-renderer.component.scss']
})
export class GenderRendererComponent implements OnInit {

  @Input()
  public value;

  public genders = {
    male:'männlich',
    female: 'weiblich',
    other: 'divers'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
