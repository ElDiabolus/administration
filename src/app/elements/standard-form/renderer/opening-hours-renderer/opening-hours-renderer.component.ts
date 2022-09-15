import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-opening-hours-renderer',
  templateUrl: './opening-hours-renderer.component.html',
  styleUrls: ['./opening-hours-renderer.component.scss'],
  providers: [
    { useExisting: forwardRef(() => OpeningHoursRendererComponent), provide: NG_VALUE_ACCESSOR, multi: true }
  ]
})
export class OpeningHoursRendererComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit(): void {
  }

  public weekDays = [
    {accessor: 'monday', headline: 'Montag'},
    {accessor: 'tuesday', headline: 'Dienstag'},
    {accessor: 'wednesday', headline: 'Mittwoch'},
    {accessor: 'thursday', headline: 'Donnerstag'},
    {accessor: 'friday', headline: 'Freitag'},
    {accessor: 'saturday', headline: 'Samstag'},
    {accessor: 'sunday', headline: 'Sonntag'},
  ];

  private innerValue: any = null;

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
