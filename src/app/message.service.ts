import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string [] = [];

  constructor() { }

  add(message: string) {
    console.log(JSON.stringify(message));
    this.messages.push(message);
  }

  clear() {
    console.log('clean message queue');
    this.messages = [];
  }
}
