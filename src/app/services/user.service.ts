import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {urls} from "../constants";
import {IUsersDetails} from "../interfaces/usersDetails";



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
