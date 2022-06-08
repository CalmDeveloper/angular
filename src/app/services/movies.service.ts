import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from '../urls'
import {IMovies} from "../interfaces/movies.Interface";
import {IDetails} from "../interfaces/details.interface";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private httpClient:HttpClient) {}
  getAll(page = 1):Observable<{page: number; results: IMovies[]}>{
    return this.httpClient.get<{page: number; results: IMovies[]}>(urls.movie,{params: {page}})
  }

  getDetails(id:number):Observable<IDetails>{
    return this.httpClient.get<IDetails>(`${urls.details}/${id}`)
  }
}
