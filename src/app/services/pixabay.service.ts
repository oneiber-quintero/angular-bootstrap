import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {

  public baseurl: any;

  constructor( private __http: HttpClient ) { 
    this.baseurl = environment.baseUrlPixabay;
  }

  public setFilters(filters: any) {
    localStorage.setItem('filters', JSON.stringify( filters ));
  }
  public getFilters() {
    let filters =  localStorage.getItem('filters');
    return filters ? JSON.parse( filters ) : filters;
  }
  public removeFilters() {
    return localStorage.removeItem('filters');
  }

  getImages(data: any): Observable<any> {

    let params = new HttpParams();

    Object.keys(data).forEach(function (item) {    
      params = params.set(item, data[item]);
    });

    return this.__http.get<any>(this.baseurl, { params }).pipe(
      retry(1),
      catchError(this.errorHandl)
    ) 
  }

  errorHandl(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
 }
}
