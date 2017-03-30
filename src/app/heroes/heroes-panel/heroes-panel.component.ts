import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-panel',
  templateUrl: './heroes-panel.component.html',
  styleUrls: ['./heroes-panel.component.css']
})
export class HeroesPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Tour of Heroes';
}
