import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('chocolates', 100),
    new Ingredient('Butter', 200)
  ];

  getIngredients() {
    return this.ingredients;
  }

  addIngredients(slIngredients: Ingredient[]) {
    this.ingredients.push(...slIngredients);
  }

}