import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  container = [];

  onStartGameClicked(event: any) {
    console.log('event value is : ' + event);
    this.container.push(event);
  }
}
