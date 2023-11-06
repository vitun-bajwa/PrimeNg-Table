import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  API: any = environment.employesApi;
  constructor(private http: HttpClient) {}

  getEmployes() {
    return this.http.get(this.API + '/employees');
  }

  getColumns() {
    return this.http.get(this.API + '/cols');
  }
}
