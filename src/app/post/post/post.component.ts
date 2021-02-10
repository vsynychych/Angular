import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../interfaces';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost;
  hide: number;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.get().subscribe(value => this.hide = value);
  }

  hidden(): void {
    this.dataService.set(this.post.id);
  }

}
