import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Placename } from 'src/app/placename';
import {WeatherService} from 'src/app//weather.service';

@Component({
  selector: 'app-forminput',
  templateUrl: './forminput.component.html',
  styleUrls: ['./forminput.component.css']
})
export class ForminputComponent {

  placename:string="bhubaneswar";

@Output() placenameupdate: EventEmitter<Placename> =new EventEmitter();

onsubmit(){
  console.log("Form Submitted")
  const Placename={
    name:this.placename
  }
  console.log(this.placename)
  this.placenameupdate.emit(Placename)

}
  

}
