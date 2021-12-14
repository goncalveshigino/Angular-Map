import { AfterViewInit, ElementRef,ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .mapa-container{

       width: 100%;
       height:100%;
    
    }

    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [13.501312833236417, -14.913656041004835];

  constructor() { }


  ngAfterViewInit(): void {
    
   this.mapa = new mapboxgl.Map({
    container: this.divMapa.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v11',
    center: this.center,
    zoom: this.zoomLevel
   });
    
    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = "Hello world"
    
  //   new mapboxgl.Marker({
  //    element: markerHtml
  //  })
      
       new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.mapa);

  }


}
