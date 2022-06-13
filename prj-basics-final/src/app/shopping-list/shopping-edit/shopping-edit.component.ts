import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() addIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @Output() clearIngredient: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();




  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.addIngredient.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    });
  }

  onDeleteIngredient() {
    this.deleteIngredient.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    });
  }
  onClearIngredient() {
    this.clearIngredient.emit();
  }

}
