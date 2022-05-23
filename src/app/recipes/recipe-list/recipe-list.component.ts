import { RecipeService } from './../recipe.service';
import { recipe } from './../recipe.model';
import { Component,  OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
 recipes:recipe[];
  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe:recipe){
   

  }

  onNewRecipe(){
         this.router.navigate(['new'],{relativeTo:this.route});
  }
 
}