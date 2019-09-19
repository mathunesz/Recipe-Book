import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  nameInput : string = ""
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  creatIngredient() {
    this.shoppingListService.addIngredient(
      // new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
      new Ingredient(this.nameInput, +this.amountInput.nativeElement.value)
    );

    this.resetForm();
  }

  resetForm() {
    // this.nameInput.nativeElement.value = "";
    this.nameInput = "";
    this.amountInput.nativeElement.value = 0;
  }

}
