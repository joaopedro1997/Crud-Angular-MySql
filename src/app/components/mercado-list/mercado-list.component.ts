import { Component, OnInit } from '@angular/core';
import { MercadoListCrudService } from 'src/app/services/mercado-list-crud.service';
import { Observable } from 'rxjs';
import { Mercado } from 'src/app/models/Mercado';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-mercado-list',
  templateUrl: './mercado-list.component.html',
  styleUrls: ['./mercado-list.component.scss']
})
export class MercadoListComponent implements OnInit {


  mercado$: Observable<Mercado[]>

  

  constructor(private  groceryListCrudService: MercadoListCrudService ) { }

   ngOnInit (): void {
     this.mercado$  = this.fetchAll();
  }

  fetchAll(): Observable<Mercado[]> {
    return this.groceryListCrudService.fetchAll();
  }


  post(mercadoItem: Partial<Mercado>): void {
    const item = (<string>mercadoItem).trim();
    if(!item) return;
    
    this.mercado$ = this.groceryListCrudService.post({ item }).pipe(
      tap((_) => this.mercado$ = this.fetchAll())
    )

  }
  update(id:number, newItem: Partial<Mercado>): void {
    const item = (<string>newItem).trim();
    if (!item) return;
    
    const newProduto: Mercado = {
      id,
      item

    }
    this.mercado$ = this.groceryListCrudService
    .update(newProduto)
    .pipe(tap((_) => this.mercado$ = this.fetchAll())
    )
  }

  delete(id: number): void {
    this.mercado$ = this.groceryListCrudService
    .delete(id)
    .pipe(tap((_) => this.mercado$ = this.fetchAll())
    )
  }
}
