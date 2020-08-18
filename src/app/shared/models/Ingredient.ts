export class Ingredient {
    name: string;
    quantite: number;

    constructor(
        nameParam: string,
        quantiteParam: number
    ) {
        this.name = nameParam;
        this.quantite = quantiteParam;
    }

    fullName() {
        return this.name + ' ' + this.quantite;
    }
}
