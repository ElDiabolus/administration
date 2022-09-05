import {Component, Input, OnInit} from '@angular/core';
import {ApiOverviewService} from "../../api-overview.service";

@Component({
  selector: 'app-sub-entity-list',
  templateUrl: './sub-entity-list.component.html',
  styleUrls: ['./sub-entity-list.component.scss']
})
export class SubEntityListComponent implements OnInit {

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
