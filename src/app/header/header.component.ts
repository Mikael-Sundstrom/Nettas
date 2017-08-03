import { Component, OnInit } from '@angular/core';
import { globals } from './../app.globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  images = globals['images'];

  constructor() { }

  ngOnInit() {
  }

}
