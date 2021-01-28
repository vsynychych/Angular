import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services';
import {IUser} from '../../interfaces';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  id: number;
  fullUser: IUser;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.id = value.id;
      this.userService.getUserById(this.id).subscribe(value1 => this.fullUser = value1);
    });
  }
}
