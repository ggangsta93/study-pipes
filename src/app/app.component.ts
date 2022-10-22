import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombre:string='.......';
  public valor:number=123456;
  public obj={
    nombre:'javier arias',
    edad: 29
  }
  public mostrarNombre():void{
      this.nombre = 'Hola Javier';
  }
}
