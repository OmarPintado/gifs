import { Component } from '@angular/core';
import {GifsService} from "../../../gifs/services/gifs.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    constructor(private servicioGif:GifsService) {// ESTOY PASANDO EL SERVICIO PARA PODER USARLO
  }

  get tags():string[]{ //DEVUELVE LOS GIFS
    return this.servicioGif.tagsHistory;
  }

  handleClick(tag:string):void{ //AL HACER CLICK SE MUESTRE EL GIF
    this.servicioGif.searchTag(tag);
  }

}
