import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() incrementNumberEvent: EventEmitter<number> = new EventEmitter<number>();
  myInterval;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.myInterval = setInterval(() => {
      this.incrementNumberEvent.emit(this.counter++);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.myInterval);
  }

}
