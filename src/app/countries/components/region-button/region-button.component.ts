import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'region-button',
  templateUrl: './region-button.component.html',
  styles: [
  ]
})
export class RegionButtonComponent {
  @Input()
  public value:string = ''

  @Output()
  public onRegion:EventEmitter<string> = new EventEmitter()
  clickBuscar(buscaRegion:string):void{
    this.onRegion.emit(buscaRegion)
  }
}
