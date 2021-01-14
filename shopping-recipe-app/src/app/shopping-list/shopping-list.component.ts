import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[] = [];

  constructor(private shoppingListServiCe: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListServiCe.getIngredients();

    this.shoppingListServiCe.ingredientAdded.subscribe(
      (ingredient: Ingredient) => {
        this.ingredients.push(ingredient);
      }
    );
  }

}
