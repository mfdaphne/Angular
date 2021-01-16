import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Chocolate Cake', 'Mix batter',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/carrot-cake-f1b3d0c.jpg',
      [new Ingredient('batter', 1),
      new Ingredient('egg', 2),
      new Ingredient('Vanilla Essense', 1)]),
    new Recipe('Carrot Cake', 'Mix batter',
      'https://static01.nyt.com/images/2015/10/15/dining/15COOKING-CARROTCAKE/15COOKING-CARROTCAKE-articleLarge.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Carrot', 5)
      ])

  ];

  constructor(private slService: ShoppingListService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}