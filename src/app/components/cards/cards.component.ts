import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: '<ng-content></ng-content>',
  styleUrls: ['./cards.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
