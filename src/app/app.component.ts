import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-web-components-poc';

  items: string[] = ['item1', 'item2', 'item3', 'item4'];

  handleListEmitted(event: CustomEvent) {
    console.log('Emitted: ', event.detail);
    this.items = ['A', 'B', 'C', 'D'];
  }
}
