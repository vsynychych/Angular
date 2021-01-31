import {Component, OnInit} from '@angular/core';
import {IUser} from '../../models';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation().extras.state as IUser;
    });
  }

  ngOnInit(): void {
  }
}


