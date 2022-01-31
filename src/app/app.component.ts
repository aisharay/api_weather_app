import { Component } from '@angular/core';
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
  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData(): void {
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
}
