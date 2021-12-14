import { AfterViewInit, ElementRef,ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string;
  marker: mapboxgl.Marker;
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
    
  }

  irMarcador() {

    this.mapa.flyTo({
      
    })

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

  }


}
