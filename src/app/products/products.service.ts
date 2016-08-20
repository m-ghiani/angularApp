import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Product } from './product.model';
import { Message } from './message.model';
@Injectable()
export class ProductsService {

  // URL where is the REST api for product 
  private productURL : string = "http://seserver.noip.me:8080/rest/products";
  constructor(private http : Http) { }

  // @method for receiving all products in the database
  getAll() : Observable<Message>{
    let products = this.http.get(`${this.productURL}`,{headers:this.getHeaders()})
                    .map((received_products:Response) => received_products.json());
    return products;
  }
  // @method for receiving one products in the database by id
  getById(id:number) : Observable<Message>{
    let products = this.http.get(`${this.productURL}/${id}`,{headers:this.getHeaders()})
                    .map((received_products:Response) => received_products.json());
    return products;
  }
  // @method for adding one product in the databse by id
  postProduct(product:Product) : Observable<Message>{
    
    let products = this.http.post(this.productURL, product, {headers: this.getHeaders()})
    .map(res => res.json());

    return products;
  }
  // @method for modify one product in the databse by id
  putProduct(id:number,product:Product) : Observable<Message> {
    let products = this.http.put(`${this.productURL}/${id}`,product,{headers:this.getHeaders()})
                    .map((received_products:Response) => received_products.json());
    return products;
  }

  // @method for deleting one product from the database by id
  deleteProduct(id:number) : Observable<Message> {
    let products = this.http.delete(`${this.productURL}/${id}`,{headers:this.getHeaders()})
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