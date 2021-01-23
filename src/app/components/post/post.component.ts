import {Component, Input, OnInit, Output} from '@angular/core';
import {PostInterface} from '../../interfaces';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  @Input()
  post: PostInterface;
  addTitle: PostInterface;
  @Output()
  bubbleUpPos = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  getTitle(post: PostInterface): void {
    console.log(post);
    this.addTitle = post;
  }

  getPost(post: PostInterface): void {
    this.bubbleUpPos.emit(post);
  }


}
