export class Hero {
  id: number;
  name: string;
  nickname: string;
  birthday: string;
  age: number;

  /*
  constructor(name: string, nickname: string, birthday: string) {
    this.name = name;
    this.nickname = nickname;
    this.birthday = birthday;
    this.calc_age();
  }
  */

  calc_age() {
    console.log('calc_age: birthday=%s', this.birthday);
    const days: string[] = this.birthday.split('/');
    const age: number  = (new Date()).getFullYear() - parseInt(days[0]) + 1; // 面倒なので数え年
    console.log('calc_age: birthday=%s', this.birthday);
    console.log('calc_age: age=%d', age);
    this.age = age;
  }

  /*
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
  */
}
