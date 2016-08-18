import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Machinery } from './machinery.model';
import { Message } from './message.model';
@Injectable()
export class MachineryService {

  // URL where is the REST api for machine 
  private machineURL : string = "http://seserver.noip.me:8080/rest/";
  constructor(private http : Http) { }

  // @method for receiving all machines in the database
  getAll() : Observable<Message>{
    let machines = this.http.get(`${this.machineURL}machines`,{headers:this.getHeaders()})
                    .map((received_machines:Response) => received_machines.json());
    return machines;
  }
  // @method for receiving one machines in the database by id
  getById(id:number) : Observable<Message>{
    let machines = this.http.get(`${this.machineURL}machines/${id}`,{headers:this.getHeaders()})
                    .map((received_machines:Response) => received_machines.json());
    return machines;
  }
  // @method for adding one machine in the databse by id
  postMachine(machine:Machinery) : Observable<Message>{
    let machines = this.http.post(`${this.machineURL}machines`,JSON.parse(JSON.stringify(machine)),{headers:this.getHeaders()})
                    .map((received_machines:Response) => received_machines.json());
    return machines;
  }
  // @method for modify one machine in the databse by id
  putMachine(id:number,machine:Machinery) : Observable<Message> {
    let machines = this.http.put(`${this.machineURL}machines/${id}`,JSON.parse(JSON.stringify(machine)),{headers:this.getHeaders()})
                    .map((received_machines:Response) => received_machines.json());
    return machines;
  }

  // @method for deleting one machine from the database by id
  deleteMachine(id:number) : Observable<Message> {
    let machines = this.http.delete(`${this.machineURL}machines/${id}`,{headers:this.getHeaders()})
                    .map((received_machines:Response) => received_machines.json());
    return machines;
  }

  // @method to create headers for this http service
  private getHeaders(){
        let headers = new Headers();
        headers.append('Accept','application/json');
        return headers;
    }
}