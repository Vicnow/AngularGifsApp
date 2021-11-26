import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey: string = "DAGjuegvz9g60rdw382wuw6jAgGb22q3";
  private serviceURL: string = "https://api.giphy.com/v1/gifs";

  private _history: string[] = [];

  public resultado: Gif[] = [];

  get history(){
    return [...this._history];
  }

  constructor(private http:HttpClient){

    this._history = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultado = JSON.parse(localStorage.getItem('lastSearch')!) || [];

  }

  buscarGifs(query:string){
    query = query.trim().toLowerCase();
    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.splice(0,10);

      localStorage.setItem('historial',JSON.stringify(this._history));
    }

    const params = new HttpParams()
    .set('api_key',this.apikey)
    .set('limit','10')
    .set('q',query)
    

    this.http.get<SearchGifsResponse>(`${this.serviceURL}/search`,{params})
    .subscribe((response) =>{
      console.log(response.data);
      this.resultado = response.data;
      localStorage.setItem('lastSearch',JSON.stringify(this.resultado));
    })
  }
}
