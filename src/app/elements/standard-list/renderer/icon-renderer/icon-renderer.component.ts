import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-renderer',
  templateUrl: './icon-renderer.component.html',
  styleUrls: ['./icon-renderer.component.scss']
})
export class IconRendererComponent implements OnInit {

  constructor() { }

  @Input()
  public value;

  ngOnInit(): void {
  }

}
