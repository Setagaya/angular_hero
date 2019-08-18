import * as moment from 'moment';
import { Hero } from './hero';

export class BattleResult {

    id: number;
    date: Date;
    homeHero: Hero;
    awayHero: Hero;
    winnerHeroId: number;
    finishingBlow: string;
  
    constructor(date: Date, homeHero: Hero, awayHero: Hero,
        winnerHeroId: number, finishingBlow: string) {
    
      this.id = 0;
      this.date = date;
      this.homeHero = homeHero;
      this.awayHero = awayHero;
      this.winnerHeroId = winnerHeroId;
      this.finishingBlow = finishingBlow;
    }

    getMessage(): string {
      console.log('getMessage start.');
      if (!this.winnerHeroId) {
        console.log('return a message for a draw game');
        return this.finishingBlow + 'で両者引き分けとなりました';
      }
      console.log('return a message');
      const message = '必殺技の ' + this.finishingBlow + ' が決まり、'
        + ((this.winnerHeroId === this.homeHero.id) ? this.homeHero.name : this.awayHero.name)
        + ' が勝利しました';
      console.log(message);
      return message;
    } 

  }