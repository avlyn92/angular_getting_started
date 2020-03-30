import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators"; // error handling operator exposed by pipe() method of the observable

@Injectable({
  //this service class is registered here using 'providedIn' prop
  //instances of this product service will be available anywhere in the application since it is registered in ROOT Injector NOT Component Injector
  providedIn: "root"
})
export class ProductService {
  private productUrl = "api/products/products.json";

  constructor(private http: HttpClient) {}

  // getProducts() returns an Observable of IProduct stream of array data
  // getProducts() takes advantage of generic param of <IProduct[]>, to define the type of data it is "observing" in the observable sequence
  getProducts(): Observable<IProduct[]> {
    // specify type of response event data (response.body) being returned from get() method == stream of array of <IProduct[]> in json format
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occured.
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contains clue as to what went wrong
      errorMessage = `Server returned code: ${err.status}, error message is ${err.error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
