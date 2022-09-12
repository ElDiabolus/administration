import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-user-role-renderer',
  templateUrl: './user-role-renderer.component.html',
  styleUrls: ['./user-role-renderer.component.scss'],
  providers: [
    { useExisting: forwardRef(() => UserRoleRendererComponent), provide: NG_VALUE_ACCESSOR, multi: true }
  ]
})
export class UserRoleRendererComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit(): void {let me = this;
    setInterval(function(){console.log(me.innerValue);},1000);
  }

  public roles = [
    {id: 'inactive', displayField: 'Inaktiv'},
    {id: 'external_employee', displayField: 'Externer Angestellter'},
    {id: 'external_manager', displayField: 'Externer Manager'},
    {id: 'employee', displayField: 'Angestellter'},
    {id: 'organization_manager', displayField: 'Organisationsverwalter'},
    {id: 'instance_manager', displayField: 'Instanzverwalter'},
  ];

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
