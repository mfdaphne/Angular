import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output('recipeWasSelected') recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Chocolate Cake','Mix batter', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/carrot-cake-f1b3d0c.jpg'),
    new Recipe('Carrot Cake','Mix batter', 'https://static01.nyt.com/images/2015/10/15/dining/15COOKING-CARROTCAKE/15COOKING-CARROTCAKE-articleLarge.jpg')
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    console.log('Recipe selected');
    this.recipeWasSelected.emit(recipe);
  }
}
