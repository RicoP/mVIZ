import { Component, Input, OnInit } from '@angular/core';

import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Layer } from 'ol/layer';

import { Distribution } from '../../../../../../backend/src/shared/dataset';
import { HttpProxyService } from './../../../http-proxy.service';
import { MatSnackBar } from '@angular/material/snack-bar';

let unityInstance : any;

@Component({
  selector: 'app-unity-map',
  templateUrl: './unity-map.component.html',
  styleUrls: ['./unity-map.component.scss']
})
export class UnityMapComponent implements OnInit {

  @Input() distribution: Distribution;

  constructor(
    private proxy: HttpProxyService,
    private snackBar: MatSnackBar
  ) { 
  }

  public geojson: Layer;

  ngOnInit() {
  }

  show3DMap() {
    let unity = document.querySelector("#unityContainer");
    let container = document.querySelector("#unity-map-container");

    //unity.parentNode = container;
    container.appendChild(unity);


    this.proxy.get(this.distribution.accessURL).subscribe(geojson => {
      /*const vectorSource = new VectorSource({
        features: (new GeoJSON()).readFeatures(res)
      });
      this.geojson = new VectorLayer({
        source: vectorSource,
        style: feature => this.styleFunction()
      });
      this.mapService.getMap(this.mapId).subscribe(map => {
        const extent = vectorSource.getExtent();
        map.getView().fit(extent);
        this.createClickInteraction(map);
      });*/

      //unityInstance.SendMessage('BrowserBindings', 'DigestJSON', JSON.stringify(geojson));
    }, error => {
      console.error(error);
      const message = error.error && error.error.text ? error.error.text : JSON.stringify(error);
      this.snackBar.open(message, null, { duration: 5000 });
    });
  }

}
