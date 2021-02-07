import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../interfaces';
import {UserService} from '../../services';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  fullUser: IUser;


  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.userService.getUserById(value.id).subscribe(value1 => this.fullUser = value1);
    });
  }

}
