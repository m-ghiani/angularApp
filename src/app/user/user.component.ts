import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  providers: [UserService],
})
export class UserComponent {

  users : User[];
  email : string;
  password: string;

  constructor(private UserService : UserService) { }
  
  onSubmit(){
    var user = new User();
    user.email = this.email;
    user.password = this.password;
    this.users.push(user);
  }
  

}
