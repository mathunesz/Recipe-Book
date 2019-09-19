import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    constructor(private shoppingListService : ShoppingListService) {}

    recipesUpdated = new Subject<Array<Recipe>>();


    recipes: Array<Recipe> = [
        new Recipe(1, 'Macarrão Simples', 'Uma massa comum.', 'http://i-exc.ccm2.net/iex/1280/2014538816/1796011.jpg', [new Ingredient('Massa', 1), new Ingredient('Molho de Tomate', 2)]),
        new Recipe(2, 'Arroz com Feijão', 'Um prato para o dia-a-dia.', 'https://static1.conquistesuavida.com.br/articles//1/16/1/@/204--article_block_media-1.jpg', [new Ingredient('Arroz', 10), new Ingredient('Feijão', 20), new Ingredient('Carne', 2)]),
    ];

    // recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id : number) {
        let recipe = this.recipes.find(a => a.id == id);

        return recipe;
    }

    addRecipe(recipe : Recipe) {
        this.recipes.push(recipe);
        this.recipes.sort((a, b) => { return a.id - b.id });

        this.recipesUpdated.next(this.recipes);
    }

    addIngredientsToShoppingList(ingridients : Ingredient[]) {
        this.shoppingListService.addIngredients(ingridients);
    }

    removeRecipe(recipe : Recipe) {
        let id = this.recipes.findIndex(a => a.id == recipe.id);
        this.recipes.splice(id, 1);

        this.recipesUpdated.next(this.recipes);
    }
}