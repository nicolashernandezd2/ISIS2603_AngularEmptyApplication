import { Component, OnInit } from '@angular/core';
import { SeriesService }     from '../series.service';
import { Serie }             from '../series';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];

  constructor(private svc: SeriesService) {}

  ngOnInit(): void {
    this.svc.fetchAll().subscribe(data => this.series = data);
  }

  getSeasonsAverage(): number {
    if (!this.series.length) {
      return 0;
    }
    const total = this.series.reduce((sum, s) => sum + s.seasons, 0);
    return Math.round(total / this.series.length);
  }
}