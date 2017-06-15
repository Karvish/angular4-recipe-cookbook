import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {

  recipes: Recipe[] = [
     new Recipe(
      'Ricotta salad',
      'This test descr',
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
      [
        new Ingredient('Carrot', 5),
        new Ingredient('Ricotta', 1)
      ]
      ),
     new Recipe(
       'Fruit salad',
       'This test descr',
      'http://bi.gazeta.pl/im/7d/6a/e6/z15100541Q,Salatka-owocowa-i-kawalek-ciasta-drozdzowego-.jpg',
      [
        new Ingredient('Apple', 5),
        new Ingredient('Orange', 1)
      ]
      )

  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
  }

}
