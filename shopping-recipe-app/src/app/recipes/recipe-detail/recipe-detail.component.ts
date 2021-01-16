import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input('capturedRecipe') capturedRecipe : Recipe;

recipeDetail : Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  captureSelectedRecipe(recipe : Recipe){
    this.recipeDetail = recipe;
  }

  addToShoppingList(ingredients : Ingredient[]){
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }
}
