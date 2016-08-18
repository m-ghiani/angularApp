import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Product } from './product.model';
import { Message } from './message.model';
@Injectable()
export class ProductsService {

  // URL where is the REST api for product 
  private productURL : string = "http://seserver.noip.me:8080/rest/";
  constructor(private http : Http) { }

  // @method for receiving all products in the database
  getAll() : Observable<Message>{
    let products = this.http.get(`${this.productURL}products`,{headers:this.getHeaders()})
                    .map((received_products:Response) => received_products.json());
    return products;
  }

  getById(id:number) : Observable<Message>{
    let products = this.http.get(`${this.productURL}products/${id}`,{headers:this.getHeaders()})
                    .map((received_products:Response) => received_products.json());
    return products;
  }

  

  // @method to create headers for this http service
  private getHeaders(){
        let headers = new Headers();
        headers.append('Accept','application/json');
        return headers;
    }
}