import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWIxZTJlMTBlNTU0ZWI2YjU4NGE5ZGE3ZTI5YjAzNyIsInN1YiI6IjYyOTQ5MmQ2MDllZDhmMTI1NDc4Yjc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZVd5vjV7IBhjZAX_sjuDdqNUlriythv5ZIpl0cbPJhU';

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    })
    return next.handle(request);
  }

}
