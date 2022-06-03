import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() onRecipesClickedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onShoppingListClickedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();


  onRecipesClicked() {
    console.log('onRecipesClicked');
    this.onRecipesClickedEvent.emit(true);
    this.onShoppingListClickedEvent.emit(false);
  }

  onShoppingListClicked() {
    console.log('onShoppingListClicked');
    this.onShoppingListClickedEvent.emit(true);
    this.onRecipesClickedEvent.emit(false);
  }

}
