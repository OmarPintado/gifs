import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../../services/gifs.service";

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('searchBox')
  public tagInputXD!:ElementRef<HTMLInputElement>;

  constructor(private servicioGifs:GifsService ) {
  }

  searchTag():void {
    const newTag = this.tagInputXD.nativeElement.value;
    console.log({xdTag: newTag});

    this.servicioGifs.searchTag(newTag);

    this.tagInputXD.nativeElement.value="";

  }


}
