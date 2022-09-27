import { Component } from '@angular/core';
import sampleData from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffee';
  Users: any = sampleData;
  setMode = false;

  receiveMode($event) {
    this.setMode = $event;
    console.log("CURRENT MODE", this.setMode);
  }
}
