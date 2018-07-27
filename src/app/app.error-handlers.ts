import { Response } from '@angular/http';
import { Observable, of, throwError } from '../../node_modules/rxjs';
import { HttpErrorResponse } from '../../node_modules/@angular/common/http';

// export class ErrorHandler {
//     static handlerError(error: Response | any) {
//         let errorMessage: string
//         if (error instanceof Response) {
//             errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
//         } else {
//             errorMessage = error.toString()
//         }
//         console.log(errorMessage);
//         return Observable.throw(errorMessage)
//     }
// }

// export class ErrorHandler {
//     static handleError<T>(operation = 'operation', result?: T) {
//         return (error: any): Observable<T> => {
//             // TODO: send the error to remote logging infrastructure
//             console.error(error); // log to console instead

//             // TODO: better job of transforming error for user consumption
//             console.log(`${operation} failed: ${error.message}`);

//             //   this.log(`${operation} failed: ${error.message}`);

//             // Let the app keep running by returning an empty result.
//             return of(result as T);
//         }
//     }
// }

// export class ErrorHandler {

//     public handleError<T>(operation = 'operation', result?: T) {
//         return (error: any): Observable<T> => {

//             // TODO: send the error to remote logging infrastructure
//             // console.error(error); // log to console instead

//             // TODO: better job of transforming error for user consumption
//             console.log(`${operation} failed: ${error.message}`);

//             // Let the app keep running by returning an empty result.
//             return of(result as T);
//         };
//     }
// }

export class ErrorHandler {

    static handleError(error: HttpErrorResponse) {
        return throwError(error.error.message);
    }
}

