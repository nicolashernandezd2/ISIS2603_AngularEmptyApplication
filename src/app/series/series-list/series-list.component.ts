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
}