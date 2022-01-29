import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forminput',
  templateUrl: './forminput.component.html',
  styleUrls: ['./forminput.component.css']
})
export class ForminputComponent {
onClick(){
  console.log("Form Submitted");
}
  

}
