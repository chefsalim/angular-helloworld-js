import {Component} from '@angular/core';

@Component({
  selector: 'hello-v2',
  template: '{{ hello }}'
})
export class HelloComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World from Angular 2!';
  }
}
