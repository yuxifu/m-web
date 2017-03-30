import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-b',
  templateUrl: './home-b.component.html',
  styleUrls: ['./home-b.component.css']
})
export class HomeBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  color = 'praimry';
  mode = 'determinate';
  value = 50;
}
