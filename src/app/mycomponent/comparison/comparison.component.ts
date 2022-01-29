import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { WeatherService } from 'src/app/weather.service';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css'],
})
export class ComparisonComponent implements OnInit {
  constructor(private WeatherData: WeatherService) {}

  ngOnInit() {
    this.WeatherData.getWeatherData().subscribe(
      (data: any) => {
        console.warn('data', data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  temp = [65, 59, 80, 81, 56];
  humidity = [28, 48, 40, 19, 86];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['Bhubaneswar', 'Mumbai', 'Delhi', 'Kolkata', 'Guwahati'],
    datasets: [
      {
        data: this.temp,
        label: 'Temp',
        backgroundColor: '#d1c7c9',
        hoverBackgroundColor: '#91787d',
        borderColor: '#655357',
        borderWidth: 2,
        hoverBorderColor: 'black',
        hoverBorderWidth: 1,
      },
      {
        data: this.humidity,
        label: 'Humidity',
        backgroundColor: '#89a2bd',
        hoverBackgroundColor: '#425b76',
        borderColor: '#655357',
        borderWidth: 2,
        hoverBorderColor: 'black',
        hoverBorderWidth: 1,
      },
    ],
  };

  // events
  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
}
