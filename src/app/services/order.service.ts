import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '../models/store.model';
import { GroceryItem } from '../models/grocery-item.model';
import { FincancialCosts } from '../models/fincancial-cost.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  url:string = 'http://localhost:3000/'

  getStores() {
    return this.http.get<Store[]>( this.url + 'stores');
  }
  getgroceryItems(){
    return this.http.get<GroceryItem>( this.url + 'orders')
  }

  getfincancialCosts(){
    return this.http.get<FincancialCosts>( this.url + 'fincancialCosts')
  }

}
