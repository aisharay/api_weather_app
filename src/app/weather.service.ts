import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Placename } from './placename';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  placename: any = 'bhubaneswar';
  temp_humid:any;
  temp:any=150;
  humid:any=200;
  url: any = ``;
  currentData:any;
  constructor(private http: HttpClient) {}
  getComparisonData1(place: any) {
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=ff1bc4683fc7325e9c57e586c20cc03e`;
    return this.http.get(this.url);
  }
  // getComparisonData2() {
  //   this.url = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=ff1bc4683fc7325e9c57e586c20cc03e`;
  //   return this.http.get(this.url);
  // }
  // getComparisonData3() {
  //   this.url = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=ff1bc4683fc7325e9c57e586c20cc03e`;
  //   return this.http.get(this.url);
  // }
  // getComparisonData4() {
  //   this.url = `https://api.openweathermap.org/data/2.5/weather?q=guwahati&appid=ff1bc4683fc7325e9c57e586c20cc03e`;
  //   return this.http.get(this.url);
  // }
  // getComparisonData5() {
  //   this.url = `https://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&appid=ff1bc4683fc7325e9c57e586c20cc03e`;
  //   return this.http.get(this.url);
  // }



  getWeatherData() {
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.placename}&appid=ff1bc4683fc7325e9c57e586c20cc03e`;
    console.log(this.placename, 'placename');
    return this.http.get(this.url);
  }
  

  

}
