import {Component, Input, OnInit} from '@angular/core';
import {Gif} from "../../interfaces/gif.interfaces";

@Component({
  selector: 'gif-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css']
})
export class GifCardComponent implements OnInit{
  @Input()
  public giffXD!: Gif;

  ngOnInit():void {
    if(!this.giffXD) throw new Error('Gif property is required');
  }
}
