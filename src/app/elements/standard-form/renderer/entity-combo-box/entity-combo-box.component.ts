import {Component, forwardRef, Input, OnInit} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {ApiOverviewService} from "../../../../api-overview.service";

@Component({
  selector: 'app-entity-combo-box',
  templateUrl: './entity-combo-box.component.html',
  styleUrls: ['./entity-combo-box.component.scss'],
  providers: [
    { useExisting: forwardRef(() => EntityComboBoxComponent), provide: NG_VALUE_ACCESSOR, multi: true }
  ]
})
export class EntityComboBoxComponent implements OnInit, ControlValueAccessor {

  constructor(private apiOverview: ApiOverviewService) { }

  protected apiService;

  @Input()
  public entityName;

  @Input()
  public customApiPath;

  @Input()
  public displayField;

  @Input()
  public queryParameters = {};

  public options = [];

  private innerValue: any = '';

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

  ngOnInit(): void {
    let me = this;
    this.apiService = this.apiOverview.getServiceByEntityName(this.entityName);
    let apiCall = this.apiOverview.getApiMethodName(this.entityName, 'Get', this.customApiPath);
    // @ts-ignore
    this.queryParameters.limit = 500;
    this.apiService[apiCall](this.queryParameters).subscribe({
      next(response) {
        console.log("response");
        console.log(response);
        me.options = response.items;
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });
  }


}
