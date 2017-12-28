import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingAmountInput')
  ingAmount: ElementRef;

  @Output()
  onAddedIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(ingNameInput: HTMLInputElement) {
    this.onAddedIngredient.emit(new Ingredient(ingNameInput.value, this.ingAmount.nativeElement.value));
  }

}
