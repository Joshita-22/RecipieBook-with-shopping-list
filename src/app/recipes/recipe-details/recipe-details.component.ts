import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
recipe:recipe;
id:number;
  constructor(private RecipeService:RecipeService,private route:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    // const id=this.route.snapshot.params['id'];
    this.route.params
    .subscribe(
         (params:Params)=>{
           this.id=+params['id'];
           this.recipe=this.RecipeService.getRecipe(this.id);

         }
    );
  }
  onAddToShoppingList(){
    this.RecipeService.addIngridentsToShoppingList(this.recipe.ingridents);

  }
  onEditRecipe(){
   this.Router.navigate(['edit'],{relativeTo:this.route});
  }

}
