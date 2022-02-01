import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public WeatherData: WeatherService) {}
  weatherData: any;
  loadVar: boolean = false;
  error: any = null;
  weatherDatas:any;
  temp1:any=0; temp2:any=0; temp3:any=0; temp4:any=0; temp5:any=0; 
  humid1:any=0;humid2:any=0;humid3:any=0;humid4:any=0;humid5:any=0;
  ngOnInit() {
    this.getWeatherData();
    this.getComparisonData1();
    this.getComparisonData2();
    this.getComparisonData3();
    this.getComparisonData4();
    this.getComparisonData5();
  }
  

  

  getWeatherData(): void {
    this.error=null;
    this.loadVar = true;
    this.WeatherData.getWeatherData().subscribe(
      (data: any) => {
        console.warn('data', data);
        this.weatherData = data;
        let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
        this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
        let currentDate = new Date();
        this.weatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
        this.weatherData.temp_celcius = (
          this.weatherData.main.temp - 273.15
        ).toFixed(0);
        this.weatherData.temp_min = (
          this.weatherData.main.temp_min - 273.15
        ).toFixed(0);
        this.weatherData.temp_max = (
          this.weatherData.main.temp_max - 273.15
        ).toFixed(0);
        this.weatherData.temp_feels_like = (
          this.weatherData.main.feels_like - 273.15
        ).toFixed(0);
        this.loadVar = false;
      },
      (error) => {
        console.log(error);
        this.error = error.name;
        this.loadVar = false;
      }
    );
  }



  getComparisonData1(): void {
    this.error=null;
    this.WeatherData.getComparisonData1().subscribe(
      (datas: any) => {
        this.weatherDatas = datas;
        this.temp[0]=(
          this.weatherDatas.main.temp - 273.15
        ).toFixed(0);
        this.humidity[0]=this.weatherDatas.main.humidity;
        
      },
      (error: { name: any; }) => {
        console.log(error);
        this.error = error.name;
      }
    );
  }
  getComparisonData2(): void {
    this.error=null;
    this.WeatherData.getComparisonData2().subscribe(
      (datas: any) => {
        this.weatherDatas = datas;
        this.temp[1]=(
          this.weatherDatas.main.temp - 273.15
        ).toFixed(0);
        this.humidity[1]=this.weatherDatas.main.humidity;

      },
      (error: { name: any; }) => {
        console.log(error);
        this.error = error.name;
      }
    );
  }
  getComparisonData3(): void {
    this.error=null;
    this.WeatherData.getComparisonData3().subscribe(
      (datas: any) => {
        this.weatherDatas = datas;
        this.temp[2]=(
          this.weatherDatas.main.temp - 273.15
        ).toFixed(0);
        this.humidity[2]=this.weatherDatas.main.humidity;
      },
      (error: { name: any; }) => {
        console.log(error);
        this.error = error.name;
      }
    );
  }
  getComparisonData4(): void {
    this.error=null;
    this.WeatherData.getComparisonData4().subscribe(
      (datas: any) => {
        this.weatherDatas = datas;
        this.temp[3]=(
          this.weatherDatas.main.temp - 273.15
        ).toFixed(0);
        this.humidity[3]=this.weatherDatas.main.humidity;
      },
      (error: { name: any; }) => {
        console.log(error);
        this.error = error.name;
      }
    );
  }
  getComparisonData5(): void {
    this.error=null;
    this.WeatherData.getComparisonData5().subscribe(
      (datas: any) => {
        this.weatherDatas = datas;
        this.temp[4]=(
          this.weatherDatas.main.temp - 273.15
        ).toFixed(0);
        this.humidity[4]=this.weatherDatas.main.humidity;

      },
      (error: { name: any; }) => {
        console.log(error);
        this.error = error.name;
      }
    );
  }


  










  

  temp=[this.temp1, this.temp2, this.temp3, this.temp4, this.temp5];
  humidity = [this.humid1,this.humid2,this.humid3,this.humid4,this.humid5];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels:  ['Hyderabad', 'Mumbai', 'Delhi', 'Guwahati', 'Bhubaneswar'],
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

  public updateval(): void {
    this.barChartData.datasets[0].data =this.temp;
    
    this.barChartData.datasets[1].data =this.humidity;

    this.chart?.update();
  }


}
