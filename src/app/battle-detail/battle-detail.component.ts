import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-battle-detail',
  templateUrl: './battle-detail.component.html',
  styleUrls: ['./battle-detail.component.css']
})
export class BattleDetailComponent implements OnInit {
  @Input() battleResult: string;
  @Input() battleComment: string;

  constructor() { }

  ngOnInit() {
  }

}
