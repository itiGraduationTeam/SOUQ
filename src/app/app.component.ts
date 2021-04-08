import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'souq';
  scrollTop = 10;
  isVisible: boolean = false;

  onScroll(event: any) {
    this.isVisible = this.scrollTop < event.target.scrollTop;
    // console.log('asdasdwd', this.hideNav);
  }
}
