import { Injectable } from '@angular/core';

import {Observable} from "rxjs";

import {urls} from "../constants";

import {HttpClient} from "@angular/common/http";
import {IUser} from "../interfaces";





@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) {
  }
  getAll():Observable<IUser[]>{
    return this.http.get<IUser[]>(urls.users)
  }

  getByID(id: string):Observable<IUser>{
    return this.http.get<IUser>(`${urls.users}/${id}`)
  }
}
