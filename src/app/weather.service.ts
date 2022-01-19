import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
     url="https://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&appid=ff1bc4683fc7325e9c57e586c20cc03e"
  
    
     constructor(private http:HttpClient) { }
  
       getWeatherData(){
       return this.http.get(this.url);
    }
    
}
