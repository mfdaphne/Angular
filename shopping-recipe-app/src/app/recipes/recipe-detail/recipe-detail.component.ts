import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  capturedRecipe: Recipe;

  recipeDetail: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.capturedRecipe = this.recipeService.getRecipe(this.route.snapshot.params['id']);

    this.route.params.subscribe(
      (param: Params) => {
        this.capturedRecipe = this.recipeService.getRecipe(+param['id']);
      }
    );

    console.log('Captured Recipe : ' + this.capturedRecipe.name);

  }

  captureSelectedRecipe(recipe: Recipe) {
    this.recipeDetail = recipe;
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
