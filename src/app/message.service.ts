import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {

  private name = new Subject<any>();

  sendName(name: String) {
    this.name.next({text: name});
  }

  getName() {
    return this.name.asObservable();
  }

  constructor() { }

}
