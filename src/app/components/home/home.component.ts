import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPost, IUser} from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: IUser;
  post: IPost;

  constructor(private  activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  getAllUsers(): void {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation().extras.state as IUser;
    });
  }

  getAllPosts(): void {
    this.activatedRoute.params.subscribe(value => {
      this.post = this.router.getCurrentNavigation().extras.state as IPost;
    });
  }
}
