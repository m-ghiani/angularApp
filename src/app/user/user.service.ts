import { Injectable } from '@angular/core'; // base for create a service
import { Http, Headers, Response } from '@angular/http'; // base component for use REST api
import { Observable } from 'rxjs/Rx'; // to use observable objects
import { User } from './user.model';// to have user
import { Message } from './message.model'; // model of message received froms rest api
import 'rxjs/Rx'

@Injectable()
export class UserService {
  // URL of user REST api
  private userURL : string = "http://seserver.noip.me:8080/rest/";
  // init service with necessary http provider
    constructor(private http : Http){}
    // @method for receive all user in the remote db
    getAll() : Observable<Message>{
      // get request via http
        let users = this.http.get(`${this.userURL}users/`, {headers:this.getHeaders()})
        .map((res:Response) => res.json());
        return users;
    }
    // @method for receive selected user by email
    getByEmail(email:string) : Observable<Message> {
      // get request via http
        let user = this.http
                        .get(`${this.userURL}users/${email}`,{headers:this.getHeaders()})
                        .map(res => res.json());
        return user;
    }

  // @method to generate headers for this service
    private getHeaders(){
      
        let headers = new Headers();
        headers.append('Accept','application/json');
        return headers;
    }
}
