import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: '<div><ng-content></ng-content><div>',
  styleUrls: ['./cards.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
