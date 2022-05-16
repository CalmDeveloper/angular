import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../constants";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getAll():Observable<IPost[]>{
    return this.http.get<IPost[]>(urls.posts)
  }
  getById(id:string):Observable<IPost>{
    return this.http.get<IPost>(urls.posts)
  }
}
