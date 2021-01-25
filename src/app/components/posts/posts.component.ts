import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services';
import {PostInterface} from '../../interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {

  posts: PostInterface[];
  chosenOne: PostInterface;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(value => this.posts = value);
  }

  getBubblePosts(posts: PostInterface): void {
    this.chosenOne = posts;
  }

}
