import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mail-renderer',
  templateUrl: './mail-renderer.component.html',
  styleUrls: ['./mail-renderer.component.scss']
})
export class MailRendererComponent implements OnInit {

  constructor() { }

  @Input()
  public value;

  ngOnInit(): void {
  }

}
