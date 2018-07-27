import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Prod } from '../app/Prod';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  private url = 'http://localhost:8080';
  private httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'}) }

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.url}/teste/products`);
  }

  getProduct(id) {
    return this.http.get(`${this.url}/teste/${id}`);
  }

  addProduct(prod: Prod) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    const obj = { nome: prod.name, categoria: { id: prod.categoria } }
    return this.http.post(`${this.url}/teste/new`, JSON.stringify(obj), { headers: headers })
  }

  deleteProduct(id) {
    let uri = `${this.url}/teste/delete/${id}`;
    return this.http.delete(uri);
  }

  updateProduct(id: string, prod: Prod) {
    let uri = `${this.url}/teste/edit/${id}`;
    return this.http.put(uri, JSON.stringify(prod), this.httpOptions);
  }
}
