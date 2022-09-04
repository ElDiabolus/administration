import {Component, Injector, Input, OnInit} from '@angular/core';
import {ApiOverviewService} from "../../api-overview.service";

@Component({
  selector: 'app-standard-list',
  templateUrl: './standard-list.component.html',
  styleUrls: ['./standard-list.component.scss'],
})
export class StandardListComponent implements OnInit {

  constructor(private apiOverview: ApiOverviewService) { }

  @Input()
  public entityName;

  @Input()
  public renderOptions;

  @Input()
  public customApiPath;

  public listItems;

  protected apiService;

  ngOnInit(): void {
    let me = this;
    this.apiService = this.apiOverview.getServiceByEntityName(this.entityName);
    let apiCall = this.apiOverview.getApiMethodName(this.entityName, 'Get', this.customApiPath);

    this.apiService[apiCall]().subscribe({
      next(response) {
        me.listItems = response;
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });
  }

}
