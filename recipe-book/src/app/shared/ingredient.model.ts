export class Ingredient {
    constructor(public name: string, public amount: number) {}

    static clone(ingredient : Ingredient) {
        return new Ingredient(ingredient.name, ingredient.amount);
    }
}