import {Component} from '@angular/core';
import {UserInterface} from '../../interfaces';
import {users} from '../../dataBases';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  users: UserInterface[] = users;
}
