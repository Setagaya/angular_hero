import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { BattleResult } from './battleResult';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor() { }

  getBattleResult(homeHero: Hero, awayHero: Hero): BattleResult {
    console.log(homeHero);
    console.log(awayHero);

    return new BattleResult(
      new Date, homeHero, awayHero, 
      this.getWinner(homeHero, awayHero),
      this.getFinishBlow()
    );
  } 

  /*
   *  勝者のhero.idを返す
   */  
  private getWinner(homeHero: Hero, awayHero: Hero): number {
    console.log('BattleService getWinner start.');
    const resultNum = Math.floor(Math.random() * 100);
    console.log('resultNum=' + resultNum);
    if (resultNum < 50) {
      return homeHero.id;
    } else if (resultNum < 90) {
      return awayHero.id;
    } else {
      return null; 
    }
  }

  /*
   *  決まり手を返す
   */  
  private getFinishBlow(): string {
    const blowList = [
      'パンチ', 'キック', '上手投げ', '上四方固め', '腕ひしぎ十字固め', '波動拳'
    ];
    const blowVal = Math.floor(Math.random() * blowList.length);
    console.log('blow=' + blowList[blowVal]);

    const situationList = [
      '渾身の', '逆転の', '目の覚めるような', '世界を狙える', '宇宙を支配するにふさわしい',
      '超高校生級の', 'ルーキーとは思えないような',
      'ラッキーな', 'へなちょこな', '素人なみの', '野良猫のような'
    ];
    const situVal = Math.floor(Math.random() * blowList.length);
    console.log('situation=' + situationList[situVal]);

    return situationList[situVal] + blowList[blowVal];
  }
}