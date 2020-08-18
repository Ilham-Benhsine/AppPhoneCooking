import { Ingredient } from './Ingredient';
export class Recette {
    title: string;
    description: string;
    ingredients: Array<Ingredient>;

    constructor(
        titleParam: string,
        descriptionParam: string,
        ingredientsParam: Array<Ingredient>
    ) {
        this.title = titleParam;
        this.description = descriptionParam;
        this.ingredients = ingredientsParam;
    }

    fullName() {
        return this.title + ' ' + this.description;
    }
}
