import { EventEmitter, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  ingredientAdded = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('chocolates', 100),
    new Ingredient('Butter', 200)
  ];

  getIngredients() {
    return this.ingredients;
  }

}