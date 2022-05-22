import { RecipeService } from './../recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
@Input()recipe:recipe;
  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
  }
  onAddToShoppingList(){
    this.RecipeService.addIngridentsToShoppingList(this.recipe.ingridents);

  }

}
