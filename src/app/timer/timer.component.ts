import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  public hours: number[];
  public mins: number[];
  constructor() { 
    this.hours = this.initHours();
    this.mins = this.initMins();
  }

  initHours(): number[] {
    let ret_arr: number[] = []; 
    for(let i = 1; i<=10; i++) {
      ret_arr.push(i);
    }
    return ret_arr;
  }

  initMins(): number[] {
    let ret_arr: number[] = []; 
    for(let i = 1; i<=60; i++) {
      ret_arr.push(i);
    }
    return ret_arr;
  }

  ngOnInit(): void {
  }
}

export class Timer {
  seconds: number;
  passed: number;

  constructor(hrs:number, mins: number) {
    this.seconds = hrs*3600 + mins*60;
    this.passed = 0;
  }
}
