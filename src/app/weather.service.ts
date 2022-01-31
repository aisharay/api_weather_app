import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Placename } from './placename';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  placename: any = 'bhubaneswar';

  url: any = ``;
  constructor(private http: HttpClient) {}

  getWeatherData() {
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.placename}&appid=ff1bc4683fc7325e9c57e586c20cc03e`;
    console.log(this.placename, 'placename');
    console.log(this.url, 'url');
    return this.http.get(this.url);
  }
}
