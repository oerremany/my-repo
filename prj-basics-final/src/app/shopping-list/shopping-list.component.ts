import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient> = [];

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }

  onClearIngredient(){
    this.ingredients = [];
  }

  onDeleteIngredient(ingredient : Ingredient){
    this.ingredients = this.ingredients.filter(item => (item.name !== ingredient.name || item.amount !== ingredient.amount));
  }

}
