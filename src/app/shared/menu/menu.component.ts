import { Component, OnInit } from '@angular/core';

interface MenuItem {

  ruta: string;
  nombre: string;

}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [

    `
    li {
      cursor: pointer;
    }
    `

  ]
})
export class MenuComponent implements OnInit {



  ngOnInit(): void {
  }

  menuItems: MenuItem[] = [
    {
      ruta: '/mapas/fullscreen',
      nombre: 'FullScreen'
    },
    {
      ruta: '/mapas/zoom-range',
      nombre: 'Zoom Range'
    },
    {
      ruta: '/mapas/marcadores',
      nombre: 'Marcadores'
    },
    {
      ruta: '/mapas/propriedades',
      nombre: 'Propiedades'
    },
  ];

}
