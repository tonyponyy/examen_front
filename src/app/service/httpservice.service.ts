import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const APIKEY = "48038ef80f04e4d94fb8e717fc9924f8"


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  protected http = inject(HttpClient);

  constructor() { }

  show_films(){
    let url: string = 'https://api.themoviedb.org/3/movie/now_playing?api_key='+APIKEY
    return this.http.get<any[]>(url);
  }

  show_film(id_film :string){
    let url: string = 'https://api.themoviedb.org/3/movie/'+id_film+'?api_key='+APIKEY
    return this.http.get<any[]>(url);
  }

  show_programs(){
    let url: string = 'https://api.themoviedb.org/3/tv/popular?api_key='+APIKEY
    return this.http.get<any[]>(url);
  }

  show_program(id_film :string){
    let url: string = 'https://api.themoviedb.org/3/movie/'+id_film+'?api_key='+APIKEY
    return this.http.get<any[]>(url);
  }

}
