import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;
  // private paramsSubscription : Subscription

  constructor(
    // private recipeService : RecipeService,
    // private route : ActivatedRoute
    ) {}
  
  ngOnInit() {
    // this.selectedRecipe = this.recipeService.getRecipe(this.route.snapshot.params['id']);

    // this.paramsSubscription = this.route.params.subscribe(
    //   (param : Params) => {
    //     this.selectedRecipe = this.recipeService.getRecipe(this.route.snapshot.params['id']);
    //   } 
    // )

    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   });
  }

  ngOnDestroy() {
    // this.paramsSubscription.unsubscribe();
    // this.recipeService.recipeSelected.unsubscribe();
  }
  
  // showRecipeDetail(recipe: {recipe: Recipe}) {
  //   this.selectedRecipe = recipe.recipe;
  // }

}
