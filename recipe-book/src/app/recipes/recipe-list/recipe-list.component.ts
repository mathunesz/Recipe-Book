import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe>;
  private recipesSubscription : Subscription;

  constructor(
    private recipeService : RecipeService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

    this.recipesSubscription = this.recipeService.recipesUpdated.subscribe(
      (recipes : Array<Recipe>) => { this.recipes = recipes }
    );
  }

  ngOnDestroy() {
    this.recipesSubscription.unsubscribe();
  }

  onNewRecipe() {
    // let newRecipe : Recipe = {
    //   id: Math.round(Math.random() * 100),
    //   name: 'Teste',
    //   description: 'desc',
    //   imagePath: 'path',
    //   ingredients: []
    // }
    
    // this.recipeService.addRecipe(newRecipe); 
    // this.router.navigate(['recipes', newRecipe.id]);
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
