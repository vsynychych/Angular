import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces';
import {URL} from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(URL.users);
  }

  getUserById(id): Observable<IUser> {
    return this.httpClient.get<IUser>(`${URL.users}/${id}`);
  }

}
