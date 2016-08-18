import { Component, Input } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  providers: [UserService],
})
export class UserComponent {

  @Input() user : User;
  users : User[];
  email : string;
  password: string;

  constructor(private userService : UserService) { 
    this.user = new User();
  }
  
  onSubmit(){
    console.log("Questa è la mail: "+ this.user.email);
    this.userService.getByEmail(this.email).subscribe(data => {
      this.users = data.message
      console.log(this.users.toString());
    })
    
  }
}
