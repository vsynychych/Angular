import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {IPost} from '../../interfaces';
import {PostService} from '../post.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost[]> {

  constructor(private postService: PostService) {
  }

  resolve(): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postService.getAllPost();
  }
}
