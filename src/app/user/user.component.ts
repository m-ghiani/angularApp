import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  providers: [UserService],
})
export class UserComponent implements OnInit {

  users : User[];
  email : string;

  constructor(private UserService : UserService) { }

  ngOnInit() {
    
  }

}
