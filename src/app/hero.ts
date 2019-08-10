export class Hero {
  id: number;
  name: string;
  nickname: string;
  _birthday: string;
  age: number;

  constructor(name: string, nickname: string, birthday: string) {
    this.name = name;
    this.nickname = nickname;
    this.birthday = birthday;
  }

  set birthday(birthday: string) {
    this._birthday = birthday;
    const days: string[] = birthday.split('/');
    const age: number  = (new Date()).getFullYear() - parseInt(days[0]) + 1; // 面倒なので数え年
    console.log('setter: birthday=%s', birthday);
    console.log('setter: age=%d', age);
    this.age = age;
  }
  get birthday(): string {
    console.log('getter');
    return this._birthday;
  }
}
