import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDet: Recipe;
  constructor() { }

  ngOnInit() {
  }

  toDetails(recipe: Recipe) {
    this.recipeDet = recipe;
  }
}
