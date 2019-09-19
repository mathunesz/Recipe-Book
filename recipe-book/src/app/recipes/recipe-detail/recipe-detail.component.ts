import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, Params, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = null;
  private paramsSubscription : Subscription;
  
  constructor(
    private recipeService : RecipeService,
    private router : Router,
    private route : ActivatedRoute ) { }

    ngOnInit() {
      this.recipe = this.recipeService.getRecipe(+this.route.snapshot.params['id']);
  
      this.paramsSubscription = this.route.params.subscribe(
        (param : Params) => {
          this.recipe = this.recipeService.getRecipe(+this.route.snapshot.params['id']);
        } 
      )
  
      // this.recipeService.recipeSelected.subscribe(
      //   (recipe: Recipe) => {
      //     this.recipe = recipe;
      //   });
    }
  
    ngOnDestroy() {
      this.paramsSubscription.unsubscribe();
      // this.recipeService.recipeSelected.unsubscribe();
    }

    addIngredientsToShoppingList() {
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
      this.router.navigate(['/shopping-list']);
    }

    onEditRecipe() {
      this.router.navigate(['edit'], {relativeTo: this.route});
    }

    onDeleteRecipe() {
      this.recipeService.removeRecipe(this.recipe);
      this.router.navigate(['/recipes']);
    }

}
