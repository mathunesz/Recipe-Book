import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsUpdated = new Subject<Array<Ingredient>>();

    private cart: Array<Ingredient> = [
        new Ingredient('Feijão', 10),
        new Ingredient('Arroz', 50),
        new Ingredient('Massa', 20),
    ];

    getIngredients() {
        return this.cart.slice();
    }

    addIngredient(ingredient : Ingredient) {
        let id = this.findIngredient(ingredient.name);

        if (id !== -1) {
            this.cart[id].amount += ingredient.amount;
        } else this.cart.push(Ingredient.clone(ingredient)); //clone to avoid reference linking

        this.ingredientsUpdated.next(this.getIngredients()); 
    }

    addIngredients(ingredients : Array<Ingredient>) {
        // this.cart.push(...ingredients);
        for (let ingredient of ingredients) {
            let id = this.findIngredient(ingredient.name);

            if (id !== -1) {
                this.cart[id].amount += ingredient.amount;
            } else this.cart.push(Ingredient.clone(ingredient)); //clone to avoid reference linking
        }

        this.ingredientsUpdated.next(this.getIngredients());
    }

    findIngredient(name : string) {
        let id = this.cart.findIndex(a => a.name == name);

        return id;
    }
}