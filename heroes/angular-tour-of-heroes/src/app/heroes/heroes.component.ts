import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',                     // css element selector
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroesFromService => this.heroes = heroesFromService);
  }

  addHero(name: string): void {

    name = name.trim();
    if (!name) { return; }

    this.heroService.addHero({name} as Hero).subscribe(
      heroFromService => this.heroes.push(heroFromService)
    );
  }

  deleteHero(hero: Hero): void {

    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
