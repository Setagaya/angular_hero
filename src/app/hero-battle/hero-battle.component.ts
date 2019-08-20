import { Component, OnInit, Input } from '@angular/core';

import { Hero }         from '../hero';
import { BattleResult } from '../battleResult';
import { HeroService }  from '../hero.service';
import { BattleService }  from '../battle.service';


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
  battleComment: string;
  
  constructor(
    private heroService: HeroService,
    private battleService: BattleService
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
        const anotherNum: number = Math.floor( Math.random() * (heroLength - 1));
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
    const battleResult = this.battleService.getBattleResult(this.heroHome, this.heroAway);
    console.log(battleResult);
    this.battleResultMsg = battleResult.getMessage();
    // TODO サービスを利用して試合結果を記録する
  }

}
