import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  constructor() {}
  // @Output() messageEvent = new EventEmitter<boolean>();
  message: boolean = true;

  @Input()
  isVisible = false;
  visible = false;
  ngOnInit(): void {
    // console.log('this.isVisible>>>>>>>>>', this.messageEvent);
    // this.scroll.emit(this.messageEvent);
  }

  ngOnChanges(changes: any) {
    console.log('>>>>>>>>>>', changes.isVisible.currentValue);
    this.visible = changes.isVisible.currentValue;
  }
  // sendMessage() {
  //   this.messageEvent.emit(this.message);
  // }
}
