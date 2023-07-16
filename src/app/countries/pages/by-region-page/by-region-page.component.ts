import {Component, EventEmitter, Output} from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {Country} from "../../interfaces/country";

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
    `.justify-content-evenly{
      margin: 5px;
    }
    `
  ]
})
export class ByRegionPageComponent {

  public countries:Country[] = [];
  constructor(private countriesService: CountriesService) {}

  searchByRegion(region:string):void{
    this.countriesService.searchRegion(region)
      .subscribe(region => {this.countries = region})
  }
}
