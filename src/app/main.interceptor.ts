import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
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
          // @ts-ignore
        catchError(res =>{
            if(res && res.error && res.status===401){
                this.authService.delateToken()
                this.router.navigate(['login'])
            }
        })
    )
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({setHeaders: {Authorization: `Bearer ${token}`}})
  }
}
