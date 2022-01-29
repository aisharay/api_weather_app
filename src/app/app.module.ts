import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {WeatherService} from './weather.service'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ForminputComponent } from './mycomponent/forminput/forminput.component';
import { NgChartsModule } from 'ng2-charts';
import { ComparisonComponent } from './mycomponent/comparison/comparison.component';
@NgModule({
  declarations: [
    AppComponent,
    ForminputComponent,
    ComparisonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
