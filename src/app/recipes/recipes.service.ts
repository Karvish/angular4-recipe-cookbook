import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipesService {

  recipes: Recipe[] = [
     new Recipe('A test Recipe', 'This test descr',
    'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
     new Recipe('A test Recipe', 'This test descr',
    'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')

  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }



  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

}
