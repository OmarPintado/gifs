import { Component } from '@angular/core';
import {GifsService} from "../../services/gifs.service";
import {Gif} from '../../interfaces/gif.interfaces'

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private servicioGif: GifsService) {
  }

  get gifs():Gif[]{
    return this.servicioGif.gifList;
  }
}
