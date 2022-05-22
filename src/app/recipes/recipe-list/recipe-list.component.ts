import { recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes:recipe[]=[
   new recipe('Pasta','white sauce pasta','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQjVd5Ke7XmYJVLF-bzdIyMUnCk-pwPmHtg&usqp=CAU'),
  
    new recipe('Pasta','white sauce pasta','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQjVd5Ke7XmYJVLF-bzdIyMUnCk-pwPmHtg&usqp=CAU')
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
