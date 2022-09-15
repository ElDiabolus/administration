import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-gender-select-renderer',
  templateUrl: './gender-select-renderer.component.html',
  styleUrls: ['./gender-select-renderer.component.scss'],
  providers: [
    { useExisting: forwardRef(() => GenderSelectRendererComponent), provide: NG_VALUE_ACCESSOR, multi: true }
  ]
})
export class GenderSelectRendererComponent implements OnInit, ControlValueAccessor {

  public genders = [
    {id: 'male', displayField: 'männlich'},
    {id: 'female', displayField: 'weiblich'},
    {id: 'other', displayField: 'divers'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  private innerValue;

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
