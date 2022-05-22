import { Ingrident } from './../shared/ingridents.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 Ingridents:Ingrident[]=[
   new Ingrident('lemon',5),
   new Ingrident('orange',3)
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
