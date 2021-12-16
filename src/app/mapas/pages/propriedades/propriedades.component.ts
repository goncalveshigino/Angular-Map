import { Component } from '@angular/core';

interface Propriedade {

  titulo: string;
  descripcion: string;
  lngLat: [number, number]

}

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styles: [
  ]
})
export class PropriedadesComponent {


  propriedades: Propriedade[] = [
    {
      titulo: 'Banco Millennium ',
      descripcion: 'Lunago',
      lngLat: [  13.559288925929161, -14.92626671278315,]
    },
    {
      titulo: 'Casa de playa, México',
      descripcion: 'Hermosa casa de playa en Acapulco, México',
      lngLat: [ -99.91287720907991, 16.828940930185748]
    },
    {
      titulo: 'Apartamento, Argentina',
      descripcion: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
      lngLat: [ -58.430166677283445, -34.57150108832866 ]
    },
    {
      titulo: 'Local comercial, España',
      descripcion: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
      lngLat: [ -3.7112735618380177, 40.42567285425766 ]
    },
  ]


}
