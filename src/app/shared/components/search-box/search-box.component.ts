import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit{
  @Input()
  public placeholder:string = '';

  @Output()
  public onValue:EventEmitter<string> = new EventEmitter();
  private tuboDeAgua:Subject<string> = new Subject<string>();
  ngOnInit():void {
    this.tuboDeAgua.pipe(
      debounceTime(250)
    )
      .subscribe(value => {
        this.onValue.emit(value)
      })
  }

  enterBuscar(algoBusca:string):void{
    this.onValue.emit(algoBusca);
  }


  onKeyPress(searchTerm:string):void{
    this.tuboDeAgua.next(searchTerm)
  }
}


