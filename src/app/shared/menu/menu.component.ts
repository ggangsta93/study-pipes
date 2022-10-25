import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [
    {
      label: 'Pipes Angular',
      icon: 'pi pi-desktop',
      items: [
        {
          label: 'Textos y fechas',
          icon: 'pi pi-align-left',
          routerLink: '/'
        },
        {
          label: 'Números',
          icon: 'pi pi-dollar',
          routerLink: 'numbers'
        },
        {
          label: 'No commons',
          icon: 'pi pi-dollar',
          routerLink: 'not-commons'
        },
      ]
    },
    {
      label: 'Pipes personalizados',
      icon: 'pi pi-cog',
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
