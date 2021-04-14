import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'souq';
  scrollTop = 200;
  isVisible: boolean = false;
  showHeader = true;
  constructor(public router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log('this.router.url', this.router.url);
        let pages = ['/login', '/signup'];
        this.showHeader = pages.includes(this.router.url);
      }
    });
  } // note you have to use Public because you are using it in html file too.

  onScroll(event: any) {
    this.isVisible = this.scrollTop < event.target.scrollTop;
  }
}
