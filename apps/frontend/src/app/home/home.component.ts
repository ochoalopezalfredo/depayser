import { Component, OnInit } from '@angular/core';
import { genders } from '../app.component';
@Component({
  selector: 'admission-test-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  genders = genders;
  constructor() { }
  ngOnInit() { }
}
