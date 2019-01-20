import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicAngular(For Loop,IfElse,ButtonClick),Events';
  array=['bananna','Apple','Orange','Dragon fruit','Mango'];
  isavailable="false";
  buttonclick(event){
    alert("Button is Clicked!!")
  }
  dropdown(event){
    alert("dropdownclicked!!")
  }
}
