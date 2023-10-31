import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  @Output() nameShare = new EventEmitter();
  constructor() {}

  alerter() {
    alert('scscaacssaccascsa');
  }
  arr = ['Shubham', 'Aniket', 'Vaish'];
  myObs: Observable<string> = new Observable((s) => {
    let i = 0;
    setInterval(() => {
      s.next(this.arr[i]);
      i = i + 1;
    }, 3000);

  });
}
