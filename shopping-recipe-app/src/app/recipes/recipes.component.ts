import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
@Input('selectedRecipe') selectedRecipe :Recipe;

receivedRecipe : Recipe;
  constructor() { }

  ngOnInit(): void {
  }


}
