import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services';
import {ActivatedRoute} from '@angular/router';
import {IPost} from '../../interfaces';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  fullPost: IPost;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getPostById(value.id).subscribe(value1 => this.fullPost = value1);
    });
  }
}
