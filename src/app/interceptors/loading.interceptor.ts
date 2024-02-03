import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { Observable, finalize } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(
    private loader: LoadingService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.loader.setLoading(true);
    return next.handle(req)
    .pipe(
      finalize(() => {
        this.totalRequests--;
        if(this.totalRequests === 0){
          this.loader.setLoading(false);
        }
      })
    )
  }
}