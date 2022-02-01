import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {WeatherService} from './weather.service'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
