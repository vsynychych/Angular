import {Component, OnInit} from '@angular/core';
import {IPost} from '../../interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../services';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  fullPost: IPost;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(value => {
    //   this.fullPost = this.router.getCurrentNavigation().extras.state as IPost;
    // });
    //   or
    this.activatedRoute.params.subscribe(value => {
      this.postService.getPostById(value.id).subscribe(value1 => this.fullPost = value1);
    });
  }

}
