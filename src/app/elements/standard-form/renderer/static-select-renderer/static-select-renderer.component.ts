import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-static-select-renderer',
  templateUrl: './static-select-renderer.component.html',
  styleUrls: ['./static-select-renderer.component.scss'],
  providers: [
    { useExisting: forwardRef(() => StaticSelectRendererComponent), provide: NG_VALUE_ACCESSOR, multi: true }
  ]
})
export class StaticSelectRendererComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public options;

  private innerValue: any = [''];

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  get value(): any {
    return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
