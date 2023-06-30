import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {Gif, SearchResponse} from "../interfaces/gif.interfaces";

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = []

  private _tagsHistory: string[] = [];
  private apiKey: string = "4vEIuD9whbKd56cffSRT7BsUniWHhI5k";
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) {//IMPORTAMOS EL HTTP CLIENT
      this.loadLocalStorage();//AL REINICIAR NAVEGADOR SE PRESENTA EL HISTORIAL ANTERIOR
  }

  get tagsHistory() {//EXTRAEMOS EL HISTORIAL DE BÚSQUEDA TAGS
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {//ORGANIZAMOS LOS TAGS SEGÚN ORDEN DE BÚSQUEDA
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  searchTag(tag: string): void {//CONSUMIMOS EL API Y BUSCAMOS EL API
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()//PASAMOS PARÁMETROS AL API
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params: params})//NOS SUSCRIBIMOS AL API
      .subscribe(resp => {
        this.gifList = resp.data;
        console.log(this.gifList);
      })
  }
  private saveLocalStorage():void {//GUARDAR BÚSQUEDAS TRAS REINICIAR EL NAVEGADOR
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void{ //CARGA LAS BÚSQUEDAS TRAS HABER REINICIADO EL NAVEGADOR
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if(this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }
}
