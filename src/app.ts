import { Component } from 'angular2/core';

@Component({
  selector: 'app',
  template: `<h1>{{ message }}</h1>`,
})
export class App {
  private message: string;

  constructor() {
    this.message = 'Hello World of Angular2!';
  }
}
