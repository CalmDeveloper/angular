import { Injectable } from '@angular/core';

import {Observable} from "rxjs";

import {urls} from "../constants";
import {IUsersDetails} from "../interfaces";
import {HttpClient} from "@angular/common/http";





@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) {
  }
  getAll():Observable<IUsersDetails[]>{
    return this.http.get<IUsersDetails[]>(urls.users)
  }

  getByID(id: string):Observable<IUsersDetails>{
    return this.http.get<IUsersDetails>(`${urls.users}/${id}`)
  }
}
