import { Ingrident } from './../../shared/ingridents.model';
import { Component, ElementRef,  OnInit,  ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput',{static:false})nameInputRef:ElementRef;
 @ViewChild('amountInput',{static:false})amountInputRef:ElementRef; 
  
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingreName=this.nameInputRef.nativeElement.value;
    const ingreAmt=this.amountInputRef.nativeElement.value;
    const newIngrident=new Ingrident(ingreName,ingreAmt);
    this.slService.addIngrident(newIngrident);
    
  }


}
