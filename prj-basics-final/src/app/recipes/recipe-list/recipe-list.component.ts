import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tajine', 'moroccan food', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Couscous', 'north african food', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  @Output() onRecipeListItemClicked: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  onRecipeItemClicked(recipe: Recipe) {
    this.onRecipeListItemClicked.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
    this.onRecipeListItemClicked.emit(this.recipes[0]);
  }

}
