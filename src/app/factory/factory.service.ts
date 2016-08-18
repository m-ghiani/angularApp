import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Factory } from './factory.model';
import { Message } from './message.model';


@Injectable()
export class FactoryService {
// URL where is the REST api for machine 
  private machineURL : string = "http://seserver.noip.me:8080/rest/";
  constructor(private http : Http) { }

  // @method for receiving all factories in the database
  getAll() : Observable<Message>{
    let factories = this.http.get(`${this.machineURL}factories`,{headers:this.getHeaders()})
                    .map((received_machines:Response) => received_machines.json());
    return factories;
  }
  // @method for receiving one factories in the database by id
  getById(id:number) : Observable<Message>{
    let factories = this.http.get(`${this.machineURL}factories/${id}`,{headers:this.getHeaders()})
                    .map((received_machines:Response) => received_machines.json());
    return factories;
  }
  // @method for adding one machine in the databse by id
  postFactory(machine:Factory) : Observable<Message>{
    let factories = this.http.post(`${this.machineURL}factories`,JSON.parse(JSON.stringify(machine)),{headers:this.getHeaders()})
                    .map((received_machines:Response) => received_machines.json());
    return factories;
  }
  // @method for modify one machine in the databse by id
  putFactory(id:number,machine:Factory) : Observable<Message> {
    let factories = this.http.put(`${this.machineURL}factories/${id}`,JSON.parse(JSON.stringify(machine)),{headers:this.getHeaders()})
                    .map((received_machines:Response) => received_machines.json());
    return factories;
  }

  // @method for deleting one machine from the database by id
  deleteFactory(id:number) : Observable<Message> {
    let factories = this.http.delete(`${this.machineURL}factories/${id}`,{headers:this.getHeaders()})
                    .map((received_machines:Response) => received_machines.json());
    return factories;
  }

  // @method to create headers for this http service
  private getHeaders(){
        let headers = new Headers();
        headers.append('Accept','application/json');
        return headers;
    }
}
