import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CountriesService} from "../../services/countries.service";
import {switchMap} from "rxjs";
import {Country} from "../../interfaces/country";

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{
  constructor(
    private activatedRoute:ActivatedRoute,
    private countriesService: CountriesService,
    private router:Router,
  ) {}

  public country?:Country;
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.countriesService.searchCountryByAlphaCode(id)),
      )
      .subscribe(country => {
        if (!country) return this.router.navigateByUrl('');
        return this.country = country;
      })
  }


}
