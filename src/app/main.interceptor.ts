import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AuthService} from "./services";
import {Router} from "@angular/router";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   const isAutheticated= this.authService.isAuthorization();
   if (isAutheticated){
     request=this.addToken(request, this.authService.getToken())
   }



      return next.handle(request).pipe(
        catchError((res:HttpErrorResponse) =>{
            if(res && res.error && res.status===401){
                this.authService.delateToken()
                this.router.navigate(['login'])
            }
            return throwError(()=>new Error('token invalid or expired!'))
        })
    )
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({setHeaders: {Authorization: `Bearer ${token}`}})
  }
}
