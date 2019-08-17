export class Hero {
  id: number;
  name: string;
  nickname: string;
  birthday: string;
  age: number;
  battlelog: string;

  constructor(name: string, nickname: string, birthday: string) {
    this.name = name;
    this.nickname = nickname;
    this.birthday = birthday;
    this.battlelog = '';
  }
}