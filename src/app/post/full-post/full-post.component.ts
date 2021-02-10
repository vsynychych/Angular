import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {IPost} from '../../interfaces';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  fullPost: IPost;
  inc: number;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getPostById(value.id).subscribe(value1 => this.fullPost = value1);
      this.dataService.getInc().subscribe(value1 => this.inc = value1);

    });
  }

  countInc(): void {
    return this.dataService.setInc();
  }

  countDec(): void {
    return this.dataService.setDec();
  }
}
