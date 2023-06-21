import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('searchBox')
  public tagInputXD!:ElementRef<HTMLInputElement>;

  searchTag():void {
    const newTag = this.tagInputXD.nativeElement.value;
    console.log({xdTag: newTag});
  }
}
