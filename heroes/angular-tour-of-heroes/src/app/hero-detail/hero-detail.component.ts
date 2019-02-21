import { Component, OnInit, Input } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }


}
