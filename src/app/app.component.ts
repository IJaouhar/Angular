import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({ 
  selector: 'app-root',
  template: `
    <app-customers></app-customers>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  
}