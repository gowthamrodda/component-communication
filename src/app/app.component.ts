import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'app';
  name: any = {
    text: ''
  }
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this
      .messageService
      .getName()
      .subscribe((name) => { this.name = name});
  }

  displayMessage() {

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
