import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isRecipeToShow: boolean = true;
  isShoppingListToShow: boolean = false;



  onRecipesClickedEvent(isRecipeToShow: boolean) {
    this.isRecipeToShow = isRecipeToShow;
  }

  onShoppingListClickedEvent(isShoppingListToShow : boolean){
    this.isShoppingListToShow = isShoppingListToShow;
  }
}
