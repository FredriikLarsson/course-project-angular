import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
    templateUrl: './recipe-list-component.html',
    selector: 'app-recipe-list'
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Test recipe', 'This is my first test recipe', 'https://p1.pxfuel.com/preview/837/314/480/food-pasta-plate-plating.jpg'),
        new Recipe('Test recipe', 'This is my first test recipe', 'https://p1.pxfuel.com/preview/837/314/480/food-pasta-plate-plating.jpg'),
        new Recipe('Test recipe', 'This is my first test recipe', 'https://p1.pxfuel.com/preview/837/314/480/food-pasta-plate-plating.jpg')
    ];
}