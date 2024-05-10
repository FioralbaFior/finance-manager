import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { Injectable } from '@angular/core';
import { ModelsComponent } from '../models/models.component';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';

@Component({
  selector: 'app-interceptors',
  templateUrl: './interceptors.component.html',
  styleUrl: './interceptors.component.css'
})
export class InterceptorsComponent {
  
  constructor(private auth: ServicesComponent, private toast: ModelsComponent, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.auth.getToken();

    // this.start.load();
    if(myToken){
      request = request.clone({
        setHeaders: {Authorization:`Bearer ${myToken}`}  // "Bearer "+myToken
      })
    }

    return next.handle(request).pipe(
      catchError((err:any)=>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            //this.toast.warning({detail:"Warning", summary:"Token is expired, Please Login again"});
            //this.router.navigate(['login'])
            //handle
            return this.handleUnAuthorizedError(request,next);
          }
        }
        return throwError(()=> err)
      })
    );
  }
  handleUnAuthorizedError(req: HttpRequest<any>, next: HttpHandler){
    let tokeApiModel = new ModelsComponent();
    tokeApiModel.accessToken = this.auth.getToken()!;
    tokeApiModel.refreshToken = this.auth.getRefreshToken()!;
    return this.auth.renewToken(tokeApiModel)
    .pipe(
      switchMap((data:ModelsComponent)=>{
        this.auth.storeRefreshToken(data.refreshToken);
        this.auth.storeToken(data.accessToken);
        req = req.clone({
          setHeaders: {Authorization:`Bearer ${data.accessToken}`}  // "Bearer "+myToken
        })
        return next.handle(req);
      }),
      catchError((err)=>{
        return throwError(()=>{
          this.toast.warning({detail:"Warning", summary:"Token is expired, Please Login again"});
          this.router.navigate(['login'])
        })
      })
    )
  }

}
