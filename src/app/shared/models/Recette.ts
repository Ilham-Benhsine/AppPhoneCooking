import { Ingredient } from './Ingredient';
export class Recette {
    title: string;
    description: string;
    picture: string;
    ingredients: Array<Ingredient>;

    constructor(
        titleParam: string,
        descriptionParam: string,
        pictureParam: string
        //ingredientsParam: Array<Ingredient>
    ) {
        this.title = titleParam;
        this.description = descriptionParam;
        this.picture = pictureParam;
       // this.ingredients = ingredientsParam;
    }

    fullName() {
        return this.title + ' ' + this.description;
    }
}
