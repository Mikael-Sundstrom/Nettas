import { Component, OnInit } from '@angular/core';
import { globals } from './../../app.globals';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name = 'Jeanette Sundström';
  address = 'Tunbyn 513';
  zip = '855 90';
  city = 'Sundsvall';
  country = 'Sweden';
  email = 'info@nettas.se';
  mobile = '070-471 47 19';
  constructor() { }

  ngOnInit() {
  }

}
