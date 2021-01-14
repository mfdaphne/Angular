import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Chocolate Cake','Mix batter', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/carrot-cake-f1b3d0c.jpg'),
        new Recipe('Carrot Cake','Mix batter', 'https://static01.nyt.com/images/2015/10/15/dining/15COOKING-CARROTCAKE/15COOKING-CARROTCAKE-articleLarge.jpg')
       
      ];

      getRecipes(){
         return this.recipes.slice();
      }
}