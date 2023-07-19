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

  private getCountriesRequest(url:string):Observable<Country []>{ //Este método se centralizó dado que se repetía en otros 3 métodos
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }
  searchCapital (capital:string): Observable<Country[]>{
    const url:string = `${this.apiUrl}/capital/${capital}`
    return this.getCountriesRequest(url);
  }

  searchPais (pais:string): Observable<Country[]>{
    const url:string = `${this.apiUrl}/name/${pais}`
    return this.getCountriesRequest(url);
  }

  searchRegion (region:string): Observable<Country[]>{
    const url:string = `${this.apiUrl}/region/${region}`
    return this.getCountriesRequest(url);
  }
  searchCountryByAlphaCode (code:string): Observable<Country | null>{
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(
        map(countries => countries.length >0 ? countries[0] : null),
        catchError(error => of(null))
      );
  }
}
