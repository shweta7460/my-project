import { Component, input} from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
  

})
export class UserCard {
  username = input.required<string>();
  useremail=input("ss.gmail.com");
  userrole =input("admin");
  

}
