import { EventEmitter } from '@angular/core';
import { Ingrident } from './../shared/ingridents.model';


export class ShoppingListService{
    ingridentsChanged=new EventEmitter<Ingrident[]>();
  private  Ingridents:Ingrident[]=[
        new Ingrident('lemon',5),
        new Ingrident('orange',3)
      ];
      getIngridents(){
          return this.Ingridents;
      }
      addIngrident(Ingrident:Ingrident){
          this.Ingridents.push(Ingrident);
          this.ingridentsChanged.emit(this.Ingridents.slice());
      }
      addIngridents(ingridents:Ingrident[]){
        //   for(let ingrident of ingridents){
        //       this.addIngrident(ingrident);
        //   }
        this.Ingridents.push(...ingridents);
        this.ingridentsChanged.emit(this.Ingridents.slice());

      }
}