import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  public name = "Guest User";
  constructor() {
    
  }

  ngOnInit(): void {
  }

  getName(): string {
    return this.name;
  }

}
