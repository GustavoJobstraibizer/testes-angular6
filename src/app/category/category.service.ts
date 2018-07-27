import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Categoria } from '../Category';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from '../../../node_modules/rxjs';
import { ErrorHandler } from '../app.error-handlers';
import { Page } from '../page';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string = 'http://localhost:8080';

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

  constructor(private http: HttpClient) { }

  getCategories(page) {
    // console.log(page)
    return this.http.get(`${this.url}/categoria?size=${page.size}&page=${page.pageNumber}`);
  }

  postCategory(category: Categoria) {
    return this.http.post(`${this.url}/categoria/insert`, JSON.stringify(category), this.httpOptions);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/categoria/delete/${id}`)
      .pipe(
        tap(() => console.log('Categoria deletada')),
        catchError(ErrorHandler.handleError))
  }

  getCategory(id: string): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.url}/categoria/${id}`)
      .pipe(
        tap(() => console.log(`fetched category id=${id}`))
      )
  }

  updateCategory(id: string, category: Categoria) {
    return this.http.put(`${this.url}/categoria/edit/${id}`, JSON.stringify(category), this.httpOptions)
      .pipe(
        catchError(ErrorHandler.handleError)
      )
  }

  // private handleError(error: HttpErrorResponse) {
  //   return throwError(error.error.message);
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error);

  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
