import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/IUser";
import {urls} from "../constants/urls";
import {Params} from "@angular/router";


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
