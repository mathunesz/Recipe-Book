import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients : Array<Ingredient>;
  private ingredientsSubscription : Subscription;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.ingredientsSubscription = this.shoppingListService.ingredientsUpdated.subscribe(
      (ingredients: Array<Ingredient>) => { this.ingredients = ingredients; }
    );
  }

  ngOnDestroy() {
    this.ingredientsSubscription.unsubscribe();
  }

}
