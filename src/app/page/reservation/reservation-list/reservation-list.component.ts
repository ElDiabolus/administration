import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../../api/services/reservation.service";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {
  private firstDayOfWeek  = new Date();
  private lastDayOfWeek = new Date();

  public dailyReservations = [];

  constructor(protected reservationService: ReservationService) { }

  ngOnInit(): void {

    let currentWeekDay = (this.firstDayOfWeek.getDay()+6)%7;//make week begin at monday
    this.firstDayOfWeek.setDate(this.firstDayOfWeek.getDate()-currentWeekDay);
    this.lastDayOfWeek.setDate(this.firstDayOfWeek.getDate()+6);

    this.loadList();
  }

  loadList()
  {
    let me = this;
    this.reservationService.apiAdminReservationGet({time:[this.firstDayOfWeek.toISOString().split('T')[0], this.lastDayOfWeek.toISOString().split('T')[0]], sort: 'time', limit:200}).subscribe({
      error(err: any): void {
      },
      next(value: { items?: Array<{}>; meta?: {}; links?: {} }): void {
        let dayBuckets = {};

        for(const item of value.items)
        {
          // @ts-ignore
          let dateStr = (new Date(item.time)).toLocaleDateString();
          if(!dayBuckets.hasOwnProperty(dateStr))
          {
            dayBuckets[dateStr] = [];
          }
          dayBuckets[dateStr].push(item);
        }

        let reservations = [];

        for(const dateStr in dayBuckets)
        {
          let r = dayBuckets[dateStr];
          r.sort((a,b) => {return a.time.localeCompare(b.time)});
          reservations.push({day:dateStr, reservations:r});
        }
        me.dailyReservations = reservations;
      }
    });
  }

  nextWeek()
  {
    this.firstDayOfWeek.setDate(this.firstDayOfWeek.getDate()+7);
    this.lastDayOfWeek.setDate(this.lastDayOfWeek.getDate()+7);
    this.loadList();
  }

  prevWeek()
  {
    this.firstDayOfWeek.setDate(this.firstDayOfWeek.getDate()-7);
    this.lastDayOfWeek.setDate(this.lastDayOfWeek.getDate()-7);
    this.loadList();
  }

}
