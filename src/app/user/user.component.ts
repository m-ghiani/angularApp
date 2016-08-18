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

  constructor(private userService : UserService) { }
  
  onSubmit(){
    this.userService.getByEmail(this.email).subscribe(data => {
      this.users = data.message
    })
  }
}
