import { Component } from '@angular/core';
import {WeatherService} from './weather.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private WeatherData:WeatherService){ }
  weatherData={
    main:{temp : 0,humidity:0,temp_max:0,temp_min:0,feels_like:0},
    sys:{ sunset:0},
    isDay:true,
    temp_celcius:"",
    temp_max:"",
    temp_min:"",
    temp_feels_like:"",
    name: "",
    sunset_time:""
   
    
  }
  loadVar=true;
  error=null;
  ngOnInit(){
         this.WeatherData.getWeatherData().subscribe((data: any)=>{
          this.loadVar=false;
         console.warn("data",data)
         this.weatherData = data; 
         let sunsetTime = new Date(this.weatherData.sys.sunset * 1000); 
         this.weatherData.sunset_time = sunsetTime.toLocaleTimeString(); 
         let currentDate = new Date(); 
         this.weatherData.isDay = (currentDate.getTime() < sunsetTime.getTime()); 
         this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0); 
         this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0); 
         this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0); 
         this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);  
  },
  (error)=>{
    this.loadVar=false;
    console.log(error);
this.error =error.name;
  }
  )
  
}}