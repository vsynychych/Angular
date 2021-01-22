import {Component, Input} from '@angular/core';
import {UserInterface} from '../../interfaces';
import {users} from '../../dataBases';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent {
  @Input()
  users: UserInterface[] = users;
}
