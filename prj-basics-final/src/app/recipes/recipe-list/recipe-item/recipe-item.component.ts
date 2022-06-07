import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
  
  @Output() onItemClickedEvent: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onItemClicked(recipe: Recipe) {
    this.onItemClickedEvent.emit(recipe);
  }

}
