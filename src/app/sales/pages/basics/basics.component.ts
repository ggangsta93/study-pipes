import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {

  nameLower:string="javier";
  nameUpper:string="JAVIER";
  nameFull:string="JaViEr aRiAs";

  fecha:Date = new Date();//El día de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
