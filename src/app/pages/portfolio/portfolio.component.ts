import { Component, OnInit } from '@angular/core';
import { globals } from './../../app.globals';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  pathToPortfolio = globals['images'] + '/portfolio/';
  images = [
    {
      'id': 0,
      'alt': null,
      'title': 'Blåvit-rutiga kuddar',
      'description': null,
      'name': 'kuddar.jpg'
    },
    {
      'id': 1,
      'alt': null,
      'title': 'Service name 2',
      'description': null,
      'name': 'kuddar.jpg'
    },
    {
      'id': 2,
      'alt': null,
      'title': 'Service name 3',
      'description': null,
      'name': 'kuddar.jpg'
    },
    {
      'id': 3,
      'alt': null,
      'title': 'Service name 4',
      'description': null,
      'name': 'kuddar.jpg'
    },
    {
      'id': 4,
      'alt': null,
      'title': 'Service name 5',
      'description': null,
      'name': 'kuddar.jpg'
    },
    {
      'id': 5,
      'alt': null,
      'title': 'Service name 6',
      'description': null,
      'name': 'kuddar.jpg'
    },
    {
      'id': 6,
      'alt': null,
      'title': 'Service name 7',
      'description': null,
      'name': 'kuddar.jpg'
    },
    {
      'id': 7,
      'alt': null,
      'title': 'Service name 8',
      'description': null,
      'name': 'kuddar.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
