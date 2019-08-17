export class BattleResult {

    id: number;
    date: Date;
    homeHeroId: number;
    awayHeroId: number;
    winner: number; // 0..HomeHero 1..AwayHero 2..Draw
    finishingBlow: string;
  
    constructor(date: Date, homeHeroId: number, awayHeroId: number,
        winner: number, finishingBlow: string) {
    
      this.id = 0;
      this.date = date;
      this.homeHeroId = homeHeroId;
      this.awayHeroId = awayHeroId;
      this.winner = winner;
      this.finishingBlow = finishingBlow;
    }

  }