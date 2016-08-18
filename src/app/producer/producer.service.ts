import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Producer } from './producer.model';
import { Message } from './message.model';
@Injectable()
export class ProducerService {

  // URL where is the REST api for Producer 
  private ProducerURL : string = "http://seserver.noip.me:8080/rest/";
  constructor(private http : Http) { }

  // @method for receiving all producers in the database
  getAll() : Observable<Message>{
    let producers = this.http.get(`${this.ProducerURL}producers`,{headers:this.getHeaders()})
                    .map((received_producers:Response) => received_producers.json());
    return producers;
  }
  // @method for receiving one producers in the database by id
  getById(id:number) : Observable<Message>{
    let producers = this.http.get(`${this.ProducerURL}producers/${id}`,{headers:this.getHeaders()})
                    .map((received_producers:Response) => received_producers.json());
    return producers;
  }
  // @method for adding one Producer in the databse by id
  postProducer(Producer:Producer) : Observable<Message>{
    let producers = this.http.post(`${this.ProducerURL}producers`,JSON.parse(JSON.stringify(Producer)),{headers:this.getHeaders()})
                    .map((received_producers:Response) => received_producers.json());
    return producers;
  }
  // @method for modify one Producer in the databse by id
  putProducer(id:number,Producer:Producer) : Observable<Message> {
    let producers = this.http.put(`${this.ProducerURL}producers/${id}`,JSON.parse(JSON.stringify(Producer)),{headers:this.getHeaders()})
                    .map((received_producers:Response) => received_producers.json());
    return producers;
  }

  // @method for deleting one Producer from the database by id
  deleteProducer(id:number) : Observable<Message> {
    let producers = this.http.delete(`${this.ProducerURL}producers/${id}`,{headers:this.getHeaders()})
                    .map((received_producers:Response) => received_producers.json());
    return producers;
  }

  // @method to create headers for this http service
  private getHeaders(){
        let headers = new Headers();
        headers.append('Accept','application/json');
        return headers;
    }
}
