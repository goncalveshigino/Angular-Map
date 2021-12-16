import { AfterViewInit, ElementRef,ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string;
  marker: mapboxgl.Marker;
}

interface MarcadorC {
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .mapa-container{

       width: 100%;
       height:100%;
    
    }

    .list-group{
      position: fixed;
      top: 20px;
      right: 20px;
      z-index:99
    }

    li{
      cursor: pointer;
    }

    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [13.501312833236417, -14.913656041004835];

  //Array de marcadores
  marcadores: MarcadorColor[] = [];

  constructor() { }


  ngAfterViewInit(): void {
    
   this.mapa = new mapboxgl.Map({
    container: this.divMapa.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v11',
    center: this.center,
    zoom: this.zoomLevel
    
   });
    
    this.leerLocalStorage();
    
  }

  irMarcador( marker: mapboxgl.Marker) {

    this.mapa.flyTo({
      center: marker.getLngLat()
    });

  }

  addMarcador() {

    const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    
    const novoMarcador = new mapboxgl.Marker({
      draggable: true,
      color: color
    })
      .setLngLat(this.center)
      .addTo(this.mapa);
    
    //Add novo marcador no array
    this.marcadores.push({
      color,
      marker: novoMarcador
    });

    this.guardarMarcadoresLocalStorage()

  }

  guardarMarcadoresLocalStorage() {
    
    const lngLatArr: MarcadorC[] = [];

    this.marcadores.forEach(m => {
      
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      lngLatArr.push({
        color,
        centro: [lng, lat]
      });
    })

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr) );

  }

  leerLocalStorage() {
    
    if (!localStorage.getItem('marcadores')) {
      return;
    }

    const lngLatArr: MarcadorC[] = JSON.parse(localStorage.getItem('marcadores')!);


    lngLatArr.forEach(m => {
     

      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })

        .setLngLat(m.centro!)
        .addTo(this.mapa);
   })

  }


}
