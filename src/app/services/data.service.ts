import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private inc = new BehaviorSubject(0);
  private hidePost = new BehaviorSubject(null);

  constructor() {
  }

  getInc(): BehaviorSubject<number> {
    return this.inc;
  }

  setInc(): void {
    return this.inc.next(this.inc.getValue() + 1);
  }

  setDec(): void {
    return this.inc.next(this.inc.getValue() - 1);
  }


  get(): BehaviorSubject<any> {
    return this.hidePost;
  }

  set(id: number): void {
    return this.hidePost.next(id);
  }
}
