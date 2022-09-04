import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-string-renderer',
  templateUrl: './string-renderer.component.html',
  styleUrls: ['./string-renderer.component.scss']
})
export class StringRendererComponent implements OnInit {

  constructor() { }

  @Input()
  public value;

  ngOnInit(): void {
  }

}
