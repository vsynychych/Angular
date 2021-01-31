import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../models';
import {URL} from '../config';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${URL}/posts`);
  }
}
