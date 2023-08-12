import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iproduct } from './module/module';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 @Output() productoutput : EventEmitter<Iproduct> = new EventEmitter<Iproduct>()
 
  productArray : Array<Iproduct> = [
    {
    productName : 'apple',
    productDescription : "iphone 14 pro max",
    productCate : "product"
  },
  {
    productName : 'apple',
    productDescription : "iphone 14 pro max",
    productCate : "catelog"
  } 
]
  constructor() { }

  ngOnInit(): void {
  }
  
  onProduct(pname:HTMLInputElement ,pdesc:HTMLTextAreaElement){

    let obj : Iproduct ={
    productName : pname.value,
    productDescription : pdesc.value,   
    productCate : "product"
    } 
    this.productArray.unshift(obj)
    console.log(obj)
    this.productArray.unshift(obj)
    this.productoutput.emit(obj)
    pname.value='';
    pdesc.value=''

  }
  onCatelog(pname:HTMLInputElement, pdesc:HTMLTextAreaElement){
    let obj : Iproduct = {
       productName : pname.value,
       productDescription : pdesc.value,
       productCate : "catelog"

    }
    console.log(obj)
    this.productoutput.emit(obj)
    pname.value='';
    pdesc.value=''


  }

}
