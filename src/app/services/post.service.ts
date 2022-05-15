import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../interfaces/IPost";
import {Observable} from "rxjs";
import {urls} from "../constants/urls";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getAll():Observable<IPost[]>{
    return this.http.get<IPost[]>(urls.posts)
  }
  getById():Observable<IPost>{
    return this.http.get<IPost>(urls.posts)
  }
}
