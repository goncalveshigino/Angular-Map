import { ElementRef, ViewChild,OnDestroy } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container{

       width: 100%;
       height:100%;
    
    }

    .row {
      background-color: white;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
      width: 400px;
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number ] =  [13.501312833236417,-14.913656041004835]

  constructor() { }

  ngOnDestroy(): void {

    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => { });
    
  }

  ngAfterViewInit(): void {
    

    this.mapa = new mapboxgl.Map({
    container: this.divMapa.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v11',
    center: this.center,
    zoom: this.zoomLevel
    });


    this.mapa.on('zoom', (event) => this.zoomLevel = this.mapa.getZoom())

    this.mapa.on('zoomend', (event) => {
      if (this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18);
      }
    });

    //Movimento do mapa
    this.mapa.on('move', (event) => {
      const target = event.target;
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat];
    });
  
  }
  

  zoomOut() {
    this.mapa.zoomOut();
  }

  zoomIn() {
    this.mapa.zoomIn();    
  }
 
  zoomCambiar(valor: string) {
    this.mapa.zoomTo(Number(valor));
  }

}
