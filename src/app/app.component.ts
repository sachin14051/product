import { Component } from '@angular/core';
import { Iproduct } from './shared/components/form/module/module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product';
  productsArray: Array<Iproduct>=[]

  onProductopt(data:any){
   console.log(data)
   this.productsArray.unshift(data)
  }
}
