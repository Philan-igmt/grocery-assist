import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FincancialCosts } from 'src/app/models/fincancial-cost.model';
import { GroceryItem } from 'src/app/models/grocery-item.model';
import { Store } from 'src/app/models/store.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  stores$: Store[] = [];
  groceryItems$: GroceryItem[] = [];
  financials$: FincancialCosts[] = [];
  constructor(public orderService: OrderService) {
  }



 ngOnInit() {
    this.orderService.getStores().subscribe(store => {
      this.stores$.push(...store);
      console.log('stores :>> ', this.stores$);
    });

    setTimeout(async ()=>{
      try {
        await this.orderService.getgroceryItems().subscribe(order =>{
          this.groceryItems$.push(order);
         this.groceryItems$.forEach(item =>{
          return item.bookId;
         })
        })
      } catch (error) {
        console.log('error :>> ', error);
      }
    },5000)

   
    
    this.orderService.getfincancialCosts().subscribe(finances => {
      this.financials$.push(finances);
      console.log('this.financials$ :>> ', this.financials$);
    })
    
  }


  // frameOrderPayload(stores:Store[], orders: GroceryItem[], finacial: FincancialCosts){
  //   return {
  //     itemName: orders 
  //   }
  // }




}
