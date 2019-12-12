import { Component, Input, OnInit } from '@angular/core';

import { Distribution } from '../../../../../../backend/src/shared/dataset';

@Component({
  selector: 'app-unity-map',
  templateUrl: './unity-map.component.html',
  styleUrls: ['./unity-map.component.scss']
})
export class UnityMapComponent implements OnInit {

  @Input() distribution: Distribution;

  constructor() { }

  ngOnInit() {
  }

  show3DMap() {
    let unity = document.querySelector("#unityContainer");
    let container = document.querySelector("#unity-map-container");

    //unity.parentNode = container;
    container.appendChild(unity);

    //unityInstance.SendMessage('BrowserBindings', 'DigestJSON', 'MyString');
  }

}
