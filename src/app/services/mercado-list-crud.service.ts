import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';

import { Mercado } from '../models/Mercado';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MercadoListCrudService {

  private url = "http://localhost:3000/mercado/";

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({'Content-Type': "application/json"})
  }

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
    ) {}

    fetchAll(): Observable<Mercado[]> {

      return this.http.get<Mercado[]>(this.url, {responseType: "json"}).pipe(
        tap(
          (_) => console.log('Produtos encontrados')),
          catchError(
            this.errorHandlerService.handleError<Mercado[]>("fetchAll", [])
          )
      );
   }

   post(item: Partial<Mercado>): Observable<any> {
     return this.http.post<Partial<Mercado>>(this.url, item, this.httpOptions).pipe(
       catchError(
        this.errorHandlerService.handleError<Mercado[]>("Produto Cadastrado")
       )
     )
   }
   update(mercado: Mercado): Observable<any> {
     return this.http
     .put<Mercado>(this.url, mercado, this.httpOptions)
     .pipe(catchError(
        this.errorHandlerService.handleError<Mercado[]>("Produto Editado")
       )
     )
   }
   delete(id:number): Observable<any>{
    const url = `http://localhost:3000/mercado/${id}`;

    return this.http
     .delete<Mercado>(url, this.httpOptions)
     .pipe(catchError(this.errorHandlerService.handleError<Mercado[]>("Produto Apagado")))
   }
}
