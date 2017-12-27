import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe: Recipe;
  @Input()
  index: number;
  @Output()
  recipeDetIndex = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeClick(index: number) {
    this.recipeDetIndex.emit(index);
  }

}
