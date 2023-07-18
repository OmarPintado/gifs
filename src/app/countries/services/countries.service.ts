import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {Country} from "../interfaces/country";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl:string = "https://restcountries.com/v3.1"
  constructor(private http: HttpClient) {}

  searchCapital (capital:string): Observable<Country[]>{

    return this.http.get<Country[]>(`${this.apiUrl}/capital/${capital}`)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchPais (pais:string): Observable<Country[]>{

    return this.http.get<Country[]>(`${this.apiUrl}/name/${pais}`)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchRegion (region:string): Observable<Country[]>{

    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`)
      .pipe(
        catchError(error => of([]))
      );
  }
  searchCountryByAlphaCode (code:string): Observable<Country | null>{
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(
        map(countries => countries.length >0 ? countries[0] : null),
        catchError(error => of(null))
      );
  }
}
