import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {
storage= new BehaviorSubject<IUser>({id:0, email:'', name:'', username:''})
  constructor() { }
}
