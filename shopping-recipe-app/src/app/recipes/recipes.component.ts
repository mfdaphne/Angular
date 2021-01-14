import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
@Input('selectedRecipe') selectedRecipe :Recipe;

receivedRecipe : Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
   this.recipeService.selectedRecipe.subscribe(
     (recipe: Recipe) => {
       this.selectedRecipe = recipe;
     }
   );
  }


}
