import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostInterface} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPosts(): Observable<PostInterface[]> {
    return this
      .httpClient
      .get<PostInterface[]>('http://jsonplaceholder.typicode.com/posts');

  }
}
