import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from "@angular/core";
import { Ingrident } from "../shared/ingridents.model";
import { recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<recipe>();
  private  recipes:recipe[]=[
        new recipe('Pasta',
        'white sauce pasta',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQjVd5Ke7XmYJVLF-bzdIyMUnCk-pwPmHtg&usqp=CAU',
        [
            new Ingrident('pasta',1),
            new Ingrident('capsicum',1),
        ]),
       
         new recipe('Pasta2',
         'red sauce pasta',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQjVd5Ke7XmYJVLF-bzdIyMUnCk-pwPmHtg&usqp=CAU',
         [
            new Ingrident('pasta',1),
            new Ingrident('carrots',1),
         ]),
      ];
      constructor(private slService:ShoppingListService){

      }

      getRecipes(){
          return this.recipes.slice();
      }

      addIngridentsToShoppingList(ingridents:Ingrident[]){
          this.slService.addIngridents(ingridents);

      }
}