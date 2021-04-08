import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input()
  isVisible = false;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: any) {
    this.isVisible = changes.isVisible.currentValue;
  }
}
