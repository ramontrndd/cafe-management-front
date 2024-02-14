import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  add(data: any) {
    return this.httpClient.post(this.url + '/product/add/', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  update(data: any) {
    return this.httpClient.patch(this.url + '/product/update/', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }
  
  updateStatus(data: any) {
    return this.httpClient.patch(this.url + '/product/updateStatus', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }
  delete(id: any) {
    return this.httpClient.delete(this.url + '/product/delete/'+id, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }
  
  getProducts() {
    return this.httpClient.get(this.url +'/product/get');
  }
}
