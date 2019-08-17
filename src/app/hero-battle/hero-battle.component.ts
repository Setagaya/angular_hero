import { Component, OnInit, Input } from '@angular/core';

import { Hero }         from '../hero';
import { BattleResult } from '../battleResult';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-battle',
  templateUrl: './hero-battle.component.html',
  styleUrls: ['./hero-battle.component.css']
})
export class HeroBattleComponent implements OnInit {
  heroHome: Hero;
  heroAway: Hero;
  battlelogHome: string;
  battlelogAway: string;
  battleResultMsg: string;

  constructor(
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.getHeroes();
    this.battleResultMsg = 'battle result ini message';
  }

  getHeroes(): void {
    // get 2 heroes
    this.heroService.getHeroes()
      .subscribe(heroes => {
        const heroLength = heroes.length;
        console.log("heroLength=%d", heroLength);
        const heroHomeId: number = Math.floor( Math.random() * heroLength);
        const anotherNum: number = Math.floor( Math.random() * heroLength - 1);
        const heroAwayId = (anotherNum === heroHomeId) ? heroLength - 1 : anotherNum;
        console.log("heroHomeId=%d", heroHomeId);
        console.log("heroAwayId=%d", heroAwayId);
        this.heroHome = heroes[heroHomeId];
        this.heroAway = heroes[heroAwayId];
      });

    // get battle log of heroes
    this.battlelogHome = 'Home hero battle logs';  // TODO サービスを利用して値取得する処理を記述
    this.battlelogAway = 'Away hero battle logs';  // TODO サービスを利用して値取得する処理を記述
  }

  startBattle(): void {
    this.battleResultMsg = 'Battle result is this.';  // TODO サービスを利用して値取得する処理を記述
    console.log('result is recorded.'); // TODO サービスを利用して値取得する処理を記述
  }

}
